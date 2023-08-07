import PublicDayWeek from '@/app/trainee-view/[agenda]/PublicDayWeek'

export default function PublicAgenda({ params: {agenda} }) {
  return (
    <>
      <PublicDayWeek agendaId={agenda}/>
    </>
  )
}