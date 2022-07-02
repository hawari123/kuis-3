import ReactDOM from "react-dom/client";

function Welcome(props) {
    return <h1> Selamat Datang  {props.nama}</h1> ;
}

const nama = "Hawari";

function Home(nama) {
    if (props.nama != null) {
    
        const root = ReactDOM.createRoot(document.querySelector("main"));
        root.render(
        < Welcome nama="hawari" />
        );
    }
    
        return <button>Login</button>
    }
