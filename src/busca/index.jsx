// seu-componente/MangaList.jsx
import { useQuery } from '@tanstack/react-query';
import { fetchMangas } from '@/services/api';

export default function MangaList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['mangas-pt'],
    queryFn: fetchMangas
  });

  if (isLoading) return <div>Carregando...</div>;
  
  if (error) {
    console.error('Erro detalhado:', error);
    return <div>Erro: {error.message}</div>;
  }

  // Verifica se data e data.data existem
  if (!data?.data) return <div>Nenhum dado encontrado</div>;

  return (
    <div>
      <h1>Mangás em Português</h1>
      {data.data.map(manga => (
        <div key={manga.id} style={{
          border: '1px solid #ccc',
          margin: '10px',
          padding: '10px',
          borderRadius: '5px'
        }}>
          <h3>{manga.attributes.title['pt-br'] || 
                manga.attributes.title.en || 
                'Título não disponível'}</h3>
          <p>ID: {manga.id}</p>
        </div>
      ))}
    </div>
  );
}