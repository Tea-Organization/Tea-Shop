

let name = document.querySelector(".form .form-box #name");
        let email = document.querySelector(".form .form-box #email");
        let subject = document.querySelector(".form .form-box #subject");
        let message = document.querySelector(".form .form-box #message");

        function loadFormData() {
            if (localStorage.getItem('name')) {
                name.value = localStorage.getItem('name');
            }
            if (localStorage.getItem('email')) {
                email.value = localStorage.getItem('email');
            }
            if (localStorage.getItem('subject')) {
                subject.value = localStorage.getItem('subject');
            }
            if (localStorage.getItem('message')) {
                message.value = localStorage.getItem('message');
            }
        }

        function addToQueue() {
            let visitorCount = localStorage.getItem('visitorCount');

            if (visitorCount === null) {
                visitorCount = 1;
            } else {
                visitorCount = parseInt(visitorCount, 10) + 1;
            }

            localStorage.setItem('visitorCount', visitorCount);
            document.getElementById('visitor-count').innerText = visitorCount;
        }

        function submitBtn() {
            console.log(name.value);
            console.log(email.value);

            if (name.value && email.value && subject.value && message.value !== "") {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `Thanks ${name.value} , your position in queue : ${localStorage.getItem('visitorCount')}`,
                    showConfirmButton: false,
                    timer: 2500
                });

                localStorage.setItem('name', name.value);
                localStorage.setItem('email', email.value);
                localStorage.setItem('subject', subject.value);
                localStorage.setItem('message', message.value);

                name.value = "";
                email.value = "";
                subject.value = "";
                message.value = "";
            } else {
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: `Please fill the empty fields`,
                    showConfirmButton: false,
                    timer: 2500
                });
            }
        }

        window.onload = function() {
            loadFormData();
            addToQueue();
        };