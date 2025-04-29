import Header from "./components/header.tsx";
import UserList from "./components/userList.tsx";
import Footer from "./components/footer.tsx";

const array = [
  {
    name: "Giuseppe",
    lastName: "Cadura",
    age: 32,
    isSmoker: true,
  },
  {
    name: "Tchumbi",
    lastName: "Lao",
    age: 35,
    isSmoker: true,
  },
  {
    name: "José",
    lastName: "Picamoles",
    age: 68,
    isSmoker: false,
  }
]

function App() {
  return (
    <div>
      < Header />
      <p>Your userlist is:</p>
      <ul>
        {array.map((user) => (
          < UserList
            key={user.name}
            user={user}
          />
        ))}
      </ul>
      < Footer />
    </div>
  );

}
export default App