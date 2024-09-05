function submitForm(e){
    e.preventDefault();
    const form = document.getElementById("form")
    /*GetValue*/
    let ans1 = form.ques1.value
    let ans2 = form.ques2.value
    let ans3 = form.ques3.value
    let ans4 = form.ques4.value
    if (ans4 == "4") {
        ans4 = form.ques4a.value
    }
    let ans5 = form.ques5.value
    if (ans5 == "4") {
        ans5 = form.ques5a.value
    }
    let ans6 = form.ques6.value
    if (ans6 == "4") {
        ans6 = form.ques6a.value
    }
    let ans7 = form.ques7.value
    if (ans7 == "4") {
        ans7 = form.ques7a.value
    }
    let ans8 = form.ques8.value
    let ans9 = form.ques9.value
    if (ans9 == "6") {
        ans9 = form.ques9a.value
    }
    let ans10 = form.ques10.value
    console.log("ans1",ans1);
    console.log("ans2",ans2);
    console.log("ans3",ans3);
    console.log("ans4",ans4);
    console.log("ans5",ans5);
    console.log("ans6",ans6);
    console.log("ans7",ans7);
    console.log("ans8",ans8);
    console.log("ans9",ans9);
    console.log("ans10",ans10);
    
    /*Validation*/
    const requieMsg = "This question is required."
    if (!ans1) {
        document.getElementById("quesId1").classList.add("error");
        document.getElementById("err1").innerHTML = requieMsg;
    }else{
        document.getElementById("quesId1").classList.remove("error");
        document.getElementById("err1").innerHTML = ``;
    }
    if (!ans2) {
        document.getElementById("quesId2").classList.add("error");
        document.getElementById("err2").innerHTML = requieMsg;
    }else{
        document.getElementById("quesId2").classList.remove("error");
        document.getElementById("err2").innerHTML = ``;
    }
    if (!ans3) {
        document.getElementById("quesId3").classList.add("error");
        document.getElementById("err3").innerHTML = requieMsg;
    }else{
        document.getElementById("quesId3").classList.remove("error");
        document.getElementById("err3").innerHTML = ``;
    }
    if (!ans4) {
        document.getElementById("quesId4").classList.add("error");
        document.getElementById("err4").innerHTML = requieMsg;
    }else{
        document.getElementById("quesId4").classList.remove("error");
        document.getElementById("err4").innerHTML = ``;
    }
    if (!ans5) {
        document.getElementById("quesId5").classList.add("error");
        document.getElementById("err5").innerHTML = requieMsg;
    }else{
        document.getElementById("quesId5").classList.remove("error");
        document.getElementById("err5").innerHTML = ``;
    }
    if (!ans6) {
        document.getElementById("quesId6").classList.add("error");
        document.getElementById("err6").innerHTML = requieMsg;
    }else{
        document.getElementById("quesId6").classList.remove("error");
        document.getElementById("err6").innerHTML = ``;
    }
    if (!ans7) {
        document.getElementById("quesId7").classList.add("error");
        document.getElementById("err7").innerHTML = requieMsg;
    }else{
        document.getElementById("quesId7").classList.remove("error");
        document.getElementById("err7").innerHTML = ``;
    }
    if (!ans9) {
        document.getElementById("quesId9").classList.add("error");
        document.getElementById("err9").innerHTML = requieMsg;
    }else{
        document.getElementById("quesId9").classList.remove("error");
        document.getElementById("err9").innerHTML = ``;
    }
    /*Check Error*/
    if (!ans1 || !ans2 || !ans3 || !ans4 || !ans5 || !ans6 || !ans7 || !ans9 ) {
        return
    } 
    alert("Gửi báo cáo thành công")
}