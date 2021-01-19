import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.
    string()
    .min(5, "Nome deve conter, pelo menos, 5 caracteres").
    required("Nome é obrigatório"),
  email: Yup
    .string()
    .email("E-mail inválido")
    .required("E-mail é obrigatório"),
  emailVerified: Yup
    .string()
    .oneOf([Yup.ref('email'), null], "E-mail e confirmação de e-mail não correspondem"),
  image: Yup
    .string()
    .notRequired()
    .nullable(),
})