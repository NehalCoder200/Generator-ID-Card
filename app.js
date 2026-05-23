let fullName = document.getElementById('fullName')
let email = document.getElementById('email')
let cnic = document.getElementById('cnic')
let number = document.getElementById('number')
let course = document.getElementById('course')
let campus = document.getElementById('campus')
let image = document.getElementById('image')
let cardParent = document.getElementById('cardParent')


// console.log(fullNamme);
// console.log(cnic);
// console.log(course);
// console.log(campus);
// console.log(image);
// console.log(urlCreate);


function sweetFn(icon, title, text) {
    Swal.fire({
        icon,
        title,
        text,
    });
}

let studentData = {}


function submitHandler() {

    // console.log(image.files);

    if (!fullName.value.trim() ||
        !cnic.value.trim() ||
        !email.value.trim() ||
        !number.value.trim()
    ) {
        return sweetFn('error', 'Oops', 'Please enter your fields.')
    }

    // console.log(course.value);
    // console.log(campus.value);

    if (course.value.trim() == 'Select course') {
        return sweetFn('error', 'Oops', 'Select your course')
    }

    if (campus.value.trim() == 'Select campus') {
        return sweetFn('error', 'Oops', 'Select your campus')
    }


    if (!image.files[0]) {
        return sweetFn("error", "Oops..", "Please Upload Image");
    }

    let urlCreate = createImgUrlFn(image.files)

    // console.log(urlCreate);


    studentData.fullName = fullName.value;
    studentData.email = email.value
    studentData.cnic = cnic.value;
    studentData.number = number.value
    studentData.course = course.value;
    studentData.campus = campus.value;
    studentData.profileImg = urlCreate;


    // console.log(studentData);

    GeneratorIdCard(studentData)

    fullName.value = ""
    email.value = ''
    cnic.value = ""
    number.value = ""
    //   course.selectIndex = "select your course"
    //   campus.innerHTML = "select your campus"
    image.value = ""

}


function GeneratorIdCard(data) {

    cardParent.innerHTML = ` <div id="generator-id-card">

            <div class="card-header">
                <h2>Student ID Card</h2>
                <p>Saylani Mass I.T. Training / Institute SMIT</p>
            </div>

            <div class="profile-section">
                <img src=${data.profileImg} alt="Student Profile">
            </div>

            <div class="info">

                <div class="info-row">
                    <span class="label">Full Name</span>
                    <span class="value">${data.fullName}</span>
                </div>

                <div class="info-row">
                    <span class="label">CNIC</span>
                    <span class="value">${data.cnic}</span>
                </div>

                <div class="info-row">
                    <span class="label">Course</span>
                    <span class="value">${data.course}</span>
                </div>

                <div class="info-row">
                    <span class="label">Campus</span>
                    <span class="value">${data.campus}</span>
                </div>


            </div>

        </div>

        <div class="generator-card-text">
            <h3>Instructions:</h3>

            <p>Please colour print of this Admit/ID card</p>

            <p>Attestation of ID/Admit Card is extremely mandatory from SMIT</p>

            <p>No student will be allowed to enter in Entry Test without attestation of Admit/ID Card</p>

            <p>Bring CNIC and Last qualification Marksheet/Certification. (both original) at the time of Attestation</p>

            <div class="card-or-text">

                <p> Address: Gulshan Campus (2nd Floor, Mumtaz Mobile Mall, Gulshan Chowrangi)</p>

                <p>Address: Zaitoon Ashraf IT Park (Baloch Colony Rd, Karachi Administration Employees Housing Society
                    Block
                    6
                    KAECHS) Karachi, Pakistan</p>

                <p>Address: SMIT Head Office Bahadurabad</p>

                <p>Office A-25, Head, Grappetite Chowrangi, 4rt floor, Karachi, 75300</p>

                <p>Address: SMIT Malir Campus (Gohar Green City Bagh e Ibrahim Society Shah Faisal Colony Shah Faisal
                    Town)
                    75120, Pakistan</p>

                <p>Address: SMIT Aliabad Female Campus</p>

                <p>Hussainabad Aliabad Federal B-Area Block 2, Karachi, Pakistan</p>

                <p> Sector 5 D, New Karachi Town, Karachi, Pakistan </p>
            </div>

        </div>
`

}

function createImgUrlFn(file) {
    // console.log(file);
    let imageUrl = URL.createObjectURL(file[0])
    return imageUrl
}
