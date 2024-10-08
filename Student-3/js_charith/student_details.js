//get all required elements in student_details.html
const student_1 = document.getElementById("student_1");
const student_2 = document.getElementById("student_2");
const student_3 = document.getElementById("student_3");
const student_4 = document.getElementById("student_4");

//add 'mouseover' eventListner for every student and display student details when user hovering relevant image
student_1.addEventListener("mouseover", function(){
    const student_1_info = document.querySelector("#info_1");
    student_1_info.innerHTML = '<h3>Aashif Ameer</h3><p>Role: Student 1</p>';
    document.querySelector("#info_1").style.display = "block";
});

student_2.addEventListener("mouseover", function(){
    const student_2_info = document.querySelector("#info_2");
    student_2_info.innerHTML = '<h3>Dineth Jayasinghe</h3><p>Role: Student 2</p>';
    document.querySelector("#info_2").style.display = "block";
});

student_3.addEventListener("mouseover", function(){
    const student_3_info = document.querySelector("#info_3");
    student_3_info.innerHTML = '<h3>Charith Jeewantha</h3><p>Role: Student 3</p>';
    document.querySelector("#info_3").style.display = "block";
});

student_4.addEventListener("mouseover", function(){
    const student_4_info = document.querySelector("#info_4");
    student_4_info.innerHTML = '<h3>Yasindu Gunasekara</h3><p>Role: Student 4</p>';
    document.querySelector("#info_4").style.display = "block";
});

//add 'mouseout' eventListner for every student and hide student details when user mouse out from relevant image
document.addEventListener("mouseout", function(){
    document.querySelector("#info_1").style.display = "none";
    document.querySelector("#info_2").style.display = "none";
    document.querySelector("#info_3").style.display = "none";
    document.querySelector("#info_4").style.display = "none";
});
