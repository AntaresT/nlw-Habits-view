interface HabitProps {
  completed: number
}

export function Habit(props: HabitProps) {
  return (
    <div className="bg-zinc-300 w-10 text-black rounded m-2 flex items-center justify-center">
      {props.completed}
    </div>
  )
}