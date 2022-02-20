function loginvalidation(formValues1) {

    const errors1 = {};
    const regex1 = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formValues1.email1) {
        errors1.email1 = "Email is required";
    }
    else if (!regex1.test(formValues1.email1)) {
        errors1.email1 = "Email is invalid";
    }
    if (!formValues1.password1) {
        errors1.password1 = "Password is required";
    }
else if (formValues1.password1.length < 5) {
        errors1.password1 = "Password is too short";
    }

    return errors1;
}

export default loginvalidation;