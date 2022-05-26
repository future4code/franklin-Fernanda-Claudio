import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/Lt96mSBPAx22SKR_JC86iTT9VeTnojSNNJsupVNPHeFatgRzzGlEoTAdtMyhXdoH9PJPUXtkYymFOaTw70X26O1C6RalFLbhNscaPbG8hfr1OIvsZ7tPEgcH0i6TZuR86YpLntJlJusUKVFcz_UMI-CeNxrp1-vLzqi8h9X_OPv8irlUVwLHR7mJWD_N6CcBAr9il42RElxldPzwNBScARXudyt7kjOd-wXIGsrp6EUkl7QzRanUZGJnqobZ6dMRVlLqh5JnPTcrWEH2-xIfVu3GHj_apr6VsJw5B0std_FcIgwOJyQ7HYFHZ5Gy0_bLWGpR9nNw8T7ugrXgkK_Nw41qRMt5lmPCKFXxfeSOXS6Q6vbuLiPzIxI3GQ9Zo8avq4-ifQJkXXjkxHnuB-y0dQuMhZvfi0QmHaRPu7gYfcmCtNpEigrjUNpCzAOk0YxU_H1jsjeB2hiJt2NncS2BnWl1srurEjSkaKTUVVkYY8cSCgSdwR8_xNoLu1SjN6ZdDMfyWWfNGxyH8PekGqYZ7KktP-LZicLs1EHh92YiW3TZ6pGawnd0qBSdg3AKSV2UDNTN4QseY_EI67l7x3rmbhtIGKl4983MQxQTaiUHHel734TI3adp7NVJpBHvNo3EYO_-BkRiYe5hCfY7BZoX25b_XZL9lKomzZS5AltrpGEo1dDq2sHNYU-arJFYSfRBhAvGR3xgl7cRQzzxAqXlHn7nznk0pniyOSWU7wHj8iDAUYUymqifeViBML8=w998-h1330-no?authuser=0" 
          nome="Fernanda da Silva" 
          descricao="Olá, me chamo Fernanda, Resido no estado do Rio Grande do Sul e estou aqui para compartilhar conhecimentos!"
        />
        
        <ImagemButton 
          imagem="https://i.pinimg.com/originals/09/0a/ea/090aea0be7fa8331086ce7023350ef0a.png" 
          texto="Ver mais"
        />
      </div>

      <CardPequeno
      imagem="https://media.istockphoto.com/vectors/email-line-icon-on-black-background-black-flat-style-vector-vector-id1161114170?k=20&m=1161114170&s=170667a&w=0&h=2ZJOWhBWN5bcCzzxIT8XzrbLf3PkBf_-mUe8nnQ4uKY="
      nome="Email:"
      descricao="nanda.drew01@gmail.com"
      />

      <CardPequeno
      imagem="https://cdn-icons-png.flaticon.com/512/69/69869.png"
      nome="Endereço:"
      descricao="Cachoeirinha - Rio Grande do Sul"
      />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.ycar.com.br/site20/wp-content/uploads/2021/04/grupo-boticario-anuncia-plano-de-gestao-de-residuos.png" 
          nome="Grupo Boticário" 
          descricao="Atuo no time de desenvolvimento na squad de checkout! 2022-atual" 
        />
        
        <CardGrande 
          imagem="http://www.damaziovidros.com.br/templates/img/logo.png" 
          nome="Damazio Vidros " 
          descricao="Assuntos Administrativos 2021-2022" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
