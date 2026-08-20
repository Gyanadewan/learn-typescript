interface HasId {
    id: number;
}

function findById <T extends HasId>( items: T[],  id: number): T | undefined {
     return items.find ((item) => item.id === id);
}

const users = [
    {id: 1, name: "A"},
    {id: 2, name: "B"}
]



const result = findById (users,5)
console.log(result)