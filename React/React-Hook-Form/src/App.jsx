import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
function App() {
  const yupSchema = yup.object({
    name: yup
      .string()
      .required("Le champ est obligatoire")
      .min(2, "Trop court")
      .max(5, "Trop long"),
    password: yup
      .string()
      .required("Le mot de passe est obligatoire")
      .min(5, "Mot de passe trop court")
      .max(15, "Mot de passe trop long"),
    confirmPassword: yup
      .string()
      .required("Vous devez confirmer votre mot de passe")
      .oneOf(
        [yup.ref("password"), ""],
        "Les mots de passes ne sont pas les mêmes"
      ),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      gender: "man",
    },
    resolver: yupResolver(yupSchema),
    mode: 'onSubmit',
  });
  watch("name");
  const submit = (values) => {
    console.log(values);
  };

  return (
    <AppStyled>
      <h1> Mon premier formulaire</h1>

      <form onSubmit={handleSubmit(submit)}>
        <div className="inputLabel">
          <label htmlFor="name">Nom</label>
          <input
            {...register("name")}
            id="name"
            type="text"
          />
          {errors?.name && <p>{errors.name.message}</p>}

          <div className="btn-radioContent">
            <label htmlFor="sexe">Sexe</label>
            <div className="btn-radio">
              <label htmlFor="man">Homme</label>
              <input {...register('gender')} type="radio" value='man'  id="man" />
              <label htmlFor="women">Femme</label>
              <input {...register('gender')} type="radio" value="women"  id="women" />
            </div>
          </div>
          <label htmlFor="password">password</label>
          <input
            {...register("password")}
            id="password"
            type="password"
          />
          {errors?.password && <p>{errors.password.message}</p>}
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            {...register("confirmPassword", {
            })}
            id="confirmPassword"
            type="password"
          />
          {errors?.confirmPassword && <p>{errors.confirmPassword.message}</p>}

          <button className="btn-form"> Save</button>
        </div>
      </form>
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  gap: 20px;

  .inputLabel {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    label {
      font-size: 20px;
    }
    input {
      border: 1px solid grey;
      border-radius: 20px;
      padding: 20px;
    }
  }
  .btn-form {
    margin-top: 25px;
    padding: 10px;
    border-radius: 20px;
    background-color: #f76c10;
    color: white;
    border: none;
    text-transform: uppercase;
  }
  .btn-radioContent{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .btn-radio{
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
`;
