export default function() {
  const taskGrid = {
    display: 'grid',
    gridTemplateColumns: '20px 1fr 60px 60px 60px',
    gridGap: 8,
    padding: '8px 0',
    textAlign: 'center',
    borderBottom: '1px solid #ccc'
  }
  return {
    root: {
      display: 'grid',
      gridGap: 24,
      width: 800,
      minWidth: 600,
      padding: 20,
      background: '#e4f3f4',
      borderRadius: 8
    },
    title: {
      fontSize: 24,
      margin: 0
    },
    filters: {
      display: 'flex',
      gap: 4
    },
    currentButton: {
      background: '#e88302'
    },
    completedButton: {
      background: '#079f07'
    },
    tasksList: {
      listStyle: 'none',
      display: 'grid',
      gridGap: 0,
      padding: 20,
      background: '#fff',
      borderRadius: 8,
      margin: 0
    },
    taskListHead: {
      ...taskGrid
    },
    noTasks: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 16
    },
    currentTask: {
      color: '#e88302'
    },
    completedTask: {
      color: '#079f07'
    }
  }
}
