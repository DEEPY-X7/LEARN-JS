class RailwayForm {
    submit(){
        alert(this.name + "Form is Submitted!...")
    }
    cancel(){
        alert(this.name + "Your Form is cancelled")
    }
    fill(Givename){
        this.name = Givename
    }
}

let deepuForm = new RailwayForm();
deepuForm.fill("Deepu")
let HarryForm = new RailwayForm();
HarryForm.fill("Harry");

deepuForm.submit();
HarryForm.submit();
HarryForm.cancel();
