import { useParams } from 'react-router-dom';
import { normalizeJobList } from '../lib/normalizeData';
import data from './../data/data.json';

export default function JobDetailPage() {
  const normaliceJobs = normalizeJobList(data);
  const { id } = useParams<{ id: string }>(); // Recuperar el parámetro `id` de la URL
  const job = normaliceJobs.find((job) => job.id.toString() === id);

  return (
    <div className="page__container relative ">
      <div className="job-list__page h-48 bg-head bg-no-repeat bg-cover bg-center bg-primary-cyan-500"></div>
      <div className=" bg-primary-cyan-200 px-14 py-24">
        <div className="list container p-8 bg-white">
          <h1 className="text-3xl font-medium mb-4">{job?.position}</h1>
          <h2 className="text-lg font-medium text-gray-600">{job?.company}</h2>
          <p className="text-md pb-8">
            {job?.location} - {job?.contract}
          </p>
          <hr />
          <div className="description pt-8 w-2/3 text-lg">
            <p className="mb-4">
              Estamos buscando a un@ Diseñador@ Gráfic@ y Editor@ de Video que
              sea creativ@ y apasionad@ para unirse a nuestro equipo.
            </p>
            <p className="mb-4">
              Si tienes buen ojo para el diseño, habilidades para contar
              historias visuales, experiencia en edición de video y estás a la
              última en redes sociales, ¡queremos conocerte!
            </p>
            <p className="mb-4">
              Requisitos: - Estudiante o recién graduado en Diseño Gráfico o
              similar. - Conocimientos avanzados de Adobe Creative Suite
              (Photoshop, Illustrator, Premiere y After Effects). - Habilidad
              para comunicarse con fluidez en inglés (hablado y escrito). -
              Actitud positiva y disposición por aprender. Detalles del
              contrato: - Posibilidad de firmar convenio de beca. - Horario:
              9:00 a 15:00h (6 horas al día). - Trabajo híbrido. - Salario 750€/
              brutos al año.
            </p>
            <p className="mb-4">
              Mándanos tu cv y tu portfolio de trabajos a comms@socialpubli.com
              con el asunto "Beca diseño y vídeo"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
