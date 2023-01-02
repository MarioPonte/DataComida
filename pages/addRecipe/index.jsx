import React from "react";
import { useRouter } from 'next/router';
import { StyledRegisterRecipe } from "./styles";
import supabase from '../api/supabase';
import config from "../../config.json";
import { toast } from 'react-toastify';

// Custom Hook
function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);
    return {
        values,
        handleChange: (evento) => {
            const value = evento.target.value || '';
            const name = evento.target.name;
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

// List Ingredients
function addLi() {
    var textVal = document.getElementById("textVal");
    var listNode = document.getElementById("list");
    var liNode = document.createElement("li");
    var txtNode = document.createTextNode(textVal.value);

    if (textVal.value != "") {
        liNode.appendChild(txtNode);
        listNode.appendChild(liNode);
        document.getElementById("textVal").value = "";
        console.log(liNode);
    }

    return listNode.innerHTML;
}

export default function AddRecipe() {

    const formCadastro = useForm({
        initialValues: { titulo: "", imagem: "", ingredientes: "", detalhes: "", tempo: "" }
    });

    const categoryNames = Object.keys(config.foods);

    const router = useRouter();


    return (
        <StyledRegisterRecipe>

            <div className="addInfo">
                <h1 className="addInfoTitle">Inserir Receita</h1>
                <button type="button" className="closePage" onClick={() => { router.push("/") }}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>

            <form onSubmit={(evento) => {
                evento.preventDefault();
                //console.log(formCadastro.values);

                // Contrato entre o nosso front e backend
                supabase.from("foods").insert({
                    name: formCadastro.values.titulo,
                    image: formCadastro.values.imagem,
                    ingredients: addLi(),
                    details: formCadastro.values.detalhes,
                    time: formCadastro.values.tempo,
                    category: formCadastro.values.categoria,
                })
                    .then((insResponse) => {
                        console.log(insResponse);

                        toast.success('Receita inserida com sucesso!', {
                            position: "top-right",
                            autoClose: 2750,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });

                        router.push("/");
                    })
                    .catch((err) => {
                        console.log(err);
                    })

                formCadastro.clearForm();
            }}>
                <div className="foodModal">
                    <hr></hr>
                    <div>
                        <input
                            placeholder="Nome da receita"
                            name="titulo"
                            value={formCadastro.values.titulo}
                            onChange={formCadastro.handleChange}
                            required />
                    </div>

                    <select name="categoria" defaultValue="" onChange={formCadastro.handleChange} required>
                        <option value="" disabled>
                            Selecione uma categoria...
                        </option>
                        {categoryNames.map((categoryName) => {
                            return (
                                <option key={categoryName} value={categoryName}>{categoryName}</option>
                            )
                        })}
                    </select>

                    <div>
                        <input
                            type="time"
                            name="tempo"
                            value={formCadastro.values.tempo}
                            onChange={formCadastro.handleChange}
                            required />
                    </div>

                    <div>
                        <input id="textVal" placeholder="Ingredientes..." type="text" />
                        <button type="button" className="addIngredients" id="add" onClick={() => { addLi() }}>Add</button>
                    </div>

                    <ul name="lista" id="list">
                    </ul>

                    <div>
                        <textarea required name="detalhes" value={formCadastro.values.detalhes} onChange={formCadastro.handleChange} placeholder="Detalhes da receita" rows="4" cols="50">
                        </textarea>
                    </div>

                    <div>
                        <input
                            placeholder="Imagem"
                            name="imagem"
                            value={formCadastro.values.imagem}
                            onChange={formCadastro.handleChange}
                            required />
                    </div>

                    <button type="submit">
                        Cadastrar
                    </button>
                </div>
            </form>
        </StyledRegisterRecipe>
    )
}
