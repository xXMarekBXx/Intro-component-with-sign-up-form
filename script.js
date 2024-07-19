$(document).ready(function () {
    $("#claimButton").click(function () {
        let isValid = true;

        // Check first name
        if ($("#firstName").val().trim() === "") {
            $("#firstNameError").show();
            $("#firstName").closest('.form-group').addClass('invalid');
            isValid = false;
        } else {
            $("#firstNameError").hide();
            $("#firstName").closest('.form-group').removeClass('invalid');
        }

        // Check last name
        if ($("#lastName").val().trim() === "") {
            $("#lastNameError").show();
            $("#lastName").closest('.form-group').addClass('invalid');
            isValid = false;
        } else {
            $("#lastNameError").hide();
            $("#lastName").closest('.form-group').removeClass('invalid');
        }

        // Check email
        let email = $("#email").val().trim();
        if (email === "") {
            $("#emailError").show();
            $("#invalidEmailError").hide();
            $("#email").closest('.form-group').addClass('invalid');
            isValid = false;
        } else if (!email.includes("@")) {
            $("#invalidEmailError").show();
            $("#emailError").hide();
            $("#email").closest('.form-group').addClass('invalid');
            isValid = false;
        } else if (!email.includes("@")) {
            $("#invalidEmailError").show();
            $("#emailError").hide();
            $("#email").closest('.form-group').addClass('invalid');
            isValid = false;
        } else {
            $("#emailError").hide();
            $("#invalidEmailError").hide();
            $("#email").closest('.form-group').removeClass('invalid');
        }

        // Check password
        if ($("#password").val().trim() === "") {
            $("#passwordError").show();
            $("#password").closest('.form-group').addClass('invalid');
            isValid = false;
        } else {
            $("#passwordError").hide();
            $("#password").closest('.form-group').removeClass('invalid');
        }

        if (isValid) {
            alert("Form submitted successfully!");
        } else {
            $(".container").addClass('expanded');
        }
    });
});
