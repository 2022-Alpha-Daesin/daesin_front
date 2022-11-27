import toast from "react-hot-toast";

const SignUpMutationHandler = (e) => {
  let ErrorMsg = "";
  for (let key in e) {
    ErrorMsg = e[key] + "😭";
    toast.error(ErrorMsg + "😭");
  }

  console.log(e);
  // if (e.major_id.length === 0) {
  //   toast.error("전공을 선택해주세요. 😭");
  // }
};

export default SignUpMutationHandler;
