import React, { useState } from "react";
import "./Posts.css";

const Posts = ({ data, loading }) => {
  const [busca, setBusca] = useState("");
  console.log(busca);

  const nomesFiltradas = data.filter((data) =>
    data.name.toLowerCase().startsWith(busca.toLowerCase())
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div alig>
      {console.log(data)}
      <div>
        <input
          className="input--name"
          placeholder="Pesquisar"
          type="text"
          value={busca}
          onChange={(ev) => setBusca(ev.target.value)}
        ></input>
      </div>
      <table>
        <tr>
          <th className="cabecalho--name">Name</th>
          <th className="cabecalho--age">Age</th>
        </tr>
        {nomesFiltradas.map((data, index) => (
          <tr key={index}>
            <td className="name">{data.name}</td>
            <td className="age">{data.age}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Posts;
