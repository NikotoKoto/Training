import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
function App() {
  const yupSchema = yup.object({
    // name: yup
    //   .string()
    //   .required("Le champ est obligatoire")
    //   .min(2, "Trop court")
    //   .max(5, "Trop long"),
    // password: yup
    //   .string()
    //   .required("Le mot de passe est obligatoire")
    //   .min(5, "Mot de passe trop court")
    //   .max(15, "Mot de passe trop long"),
    // confirmPassword: yup
    //   .string()
    //   .required("Vous devez confirmer votre mot de passe")
    //   .oneOf(
    //     [yup.ref("password"), ""],
    //     "Les mots de passes ne sont pas les mêmes"
    //   ),
  });


  const defaultValues ={
    name: "",
    other: {sign : "disabled", gender : "man"},
    password:'',
    confirmPassword:'',
  }

  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors, isSubmitting, submitCount },
  } = useForm({
    defaultValues,
    resolver: yupResolver(yupSchema),
    mode: 'onSubmit',
  })
 

  const submit = async (values) => {
    try{
      clearErrors();
      const response = await fetch ('https://restapi.fr/api/testr',
        {method :'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        }
      )
      if (response.ok){
        throw new Error("Le nom n'est pas correct");
        // const submitValue = await response.json();
        // reset(defaultValues)
        // console.log(submitValue)
      }else {
        console.log("error")
      }
    }catch(e){
      setError("globalError", {type:"wrongName", message: e.message})
    }
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
         
    
          <div className="btn-radioContent">
            <label htmlFor="sexe">Sexe</label>
            <div className="btn-radio">
              <label htmlFor="man">Homme</label>
              <input {...register('other.gender')} type="radio" value='man'  id="man" />
              <label htmlFor="women">Femme</label>
              <input {...register('other.gender')} type="radio" value="women"  id="women" />
            </div>
          </div>
          <div className="selectContain">
            <select {...register('other.sign')} id="sign">
              <option disabled value='disabled' > Choisit un signe</option>
              <option value='fish'> Poisson</option>
              <option value='aquarius'> Verseau</option>

            </select>
          </div>
          <label htmlFor="password">password</label>
          <input
            {...register("password")}
            id="password"
            type="password"
          />
          
          
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            {...register("confirmPassword", {
            })}
            id="confirmPassword"
            type="password"
          />
          {/* why doesnt render error */}
          {errors.globalErrors && <p>{errors.globalErrors.message}</p>}

          <button className="btn-form" disabled={isSubmitting}> Save ({submitCount})</button>
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
