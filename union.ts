
function printId(id: string | number): void {
  console.log(id);
}

printId(101);
printId("ABC");




type Status = "success" | "error" | "loading";

let currentStatus: Status = "error";