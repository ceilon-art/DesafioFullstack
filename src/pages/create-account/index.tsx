import Link from 'next/link';
import api from '../../utils/services';
import { Formik, ErrorMessage } from 'formik';

import schema from '../../utils/schemaYup/schema';

import { Container, Formulary, SubmitButton, Input } from './styles';

interface MyFormValues {
  name: string;
  email: string;
  emailVerified: string;
  image: string;
}

export default function Home() {  

  const initialValues: MyFormValues = {
    name: '',
    email: '',
    emailVerified: '',
    image: '',
  }

  async function onSubmit(values: MyFormValues) {
    try {
      await api.post('/api/create-user', values);
      alert("Conta criada com sucesso")
    } catch (err) {
      alert(
        err?.response?.data?.error || "Houve um problema na criação da sua conta"
      );
    }
  }

  return (
    <Container>
      <h1>Crie sua conta no Desafio Fullstack</h1>
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        {({ values, handleChange, handleSubmit, handleBlur }) => (
          <>
            <Formulary onSubmit={handleSubmit}>
              <Input
                type='text'
                name='name'
                value={values.name}
                placeholder='Digite seu nome'
                onChange={handleChange}   
                onBlur={handleBlur}
              />
              <ErrorMessage name='name' />
              <Input
                type='email'
                name='email'
                value={values.email}
                placeholder='Digite seu email'
                onChange={handleChange} 
                onBlur={handleBlur}
              />
              <ErrorMessage name='email' />
              <Input
                type='email'
                placeholder='Confirme seu email'
                name='emailVerified'
                value={values.emailVerified}
                onChange={handleChange} 
                onBlur={handleBlur}
              />
              <ErrorMessage name='emailVerified' />
              <Input
                type='text'
                placeholder='Cole a URL da sua foto de perfil'
                name='image'
                value={values.image}
                onChange={handleChange}
                onBlur={handleBlur}
              />     
              <ErrorMessage name='image' />
              <SubmitButton type="submit">
                <Link href='/Profile'>
                  <span>Criar Conta</span>
                </Link>
              </SubmitButton>
            </Formulary>      
          </>     
        )}
      </Formik>
    </Container>
  );
}