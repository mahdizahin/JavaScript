const ministryProblem ={

    file_name :"Fund for july warrior",
    file_id : 9928,

    sign_approval_ministry1 : function(){
        return this.file_name+" "+this.file_id;
    },

    final_sign_approval: function(){
        console.log("Ekhane hobe na,Okhane jan");
        return this.sign_approval_ministry1();
    }



};

console.log(ministryProblem.final_sign_approval());