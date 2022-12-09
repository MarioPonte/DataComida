import React from "react";
import { useRouter } from 'next/router';
import { StyledRegisterVideo } from "./styles";
import { createClient } from "@supabase/supabase-js";

import config from "../../../config.json";

// Custom Hook
function useForm(propsDoForm){
    const [values, setValues] = React.useState(propsDoForm.initialValues);
    return {
        values,
        handleChange: (evento) => {
            const value = evento.target.value;
            const name = evento.target.name;
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm(){
            setValues({});
        }
    };
}

const PROJECT_URL = "https://tqfqjugaasyxfpbfboaw.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxZnFqdWdhYXN5eGZwYmZib2F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk1Nzk4MzAsImV4cCI6MTk4NTE1NTgzMH0.QzIUuSye0ph8vv0p3NhG_EkY0Ac0IM5SSou6IrZ1Bl0";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);


export default function RegisterFood() {
    const formCadastro = useForm({
        initialValues: { titulo: "", imagem: "", detalhes: ""}
    });
    const [formVisivel, setFormVisivel] = React.useState(false);

    const categoryNames = Object.keys(config.foods);

    const router = useRouter();

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => { setFormVisivel(true) }}>
                +
            </button>
            {formVisivel
                ? (
                    <form onSubmit={(evento) => {
                        evento.preventDefault();
                        //console.log(formCadastro.values);

                        // Contrato entre o nosso front e backend
                        supabase.from("foods").insert({
                            name: formCadastro.values.titulo,
                            image: formCadastro.values.imagem,
                            details: formCadastro.values.detalhes,
                            category: formCadastro.values.categoria,
                        })
                        .then((insResponse) => {
                            console.log(insResponse);
                            router.reload()
                        })
                        .catch((err) => {
                            console.log(err);
                        })

                        setFormVisivel(false);
                        formCadastro.clearForm();
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => { setFormVisivel(false) }}>
                                x
                            </button>
                            <input
                                placeholder="Nome da receita"
                                name="titulo"
                                value={formCadastro.values.titulo}
                                onChange={formCadastro.handleChange}
                                required />
                            <input
                                placeholder="Imagem"
                                name="imagem"
                                value={formCadastro.values.imagem}
                                onChange={formCadastro.handleChange}
                                required />
                            
                            <textarea name="detalhes" value={formCadastro.values.detalhes} onChange={formCadastro.handleChange} placeholder="Detalhes da receita" rows="4" cols="50">
                            </textarea>

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

                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )
                : false}
        </StyledRegisterVideo>
    )
}