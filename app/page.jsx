import Todo from '@/components/Todo'
import Dashboard from '@/app/dashboard/page'

export default async function Index() {

	return (
		<main>
			<Todo />
			<Dashboard />
		</main>
	)
}
