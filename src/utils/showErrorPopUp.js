import Swal from "sweetalert2";

function showErrorPopUp(errorText) {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: errorText
  });
}

export default showErrorPopUp;
