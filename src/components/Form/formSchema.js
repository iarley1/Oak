import * as yup from "yup"

export const FormSchema = yup.object().shape({
    name: yup.string().required("Preencha este campo"),
    description: yup.string().required("Preencha este campo"),
    value: yup.number().typeError("Por favor, digite um número").positive("Apenas numeros positivos").required("Preencha este campo"),
    avaliable: yup.string().required("Escolha um opção")
})