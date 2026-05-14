import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';

const tarefas = [
  {
    id: 1,
    title: "Estudar React Native",
    description: "Revisar componentes, props e estados para a aula da semana.",
    status: "Pendente",
    photo: img1,
  },
  {
    id: 2,
    title: "Criar atividade prática",
    description:
      "Montar um exercício com FlatList e componentes reutilizáveis.",
    status: "Concluída",
    photo: img2,
  },
  {
    id: 3,
    title: "Atualizar material da turma",
    description: "Adicionar exemplos com mock de dados e imagens online.",
    status: "Pendente",
    photo: img3,
  },
  {
    id: 4,
    title: "Publicar projeto no Git",
    description: "Subir a versão inicial do app com README de instruções.",
    status: "Concluída",
    photo: img4,
  },
];

export default tarefas;
