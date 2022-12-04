import toast from "react-hot-toast";

const SignUpMutationHandler = (e) => {
  let ErrorMsg = "";
  for (let key in e) {
    ErrorMsg = e[key] + "😭";
    toast.error(ErrorMsg + "😭");
  }
};

export default SignUpMutationHandler;
