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
    addTask: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 0
    },
    inputField: {
      height: 24,
      padding: '0 16px',
      background: '#fff',
      border: '1px solid #ccc',
      borderRadius: '4px 0 0 4px'
    },
    addTaskButton: {
      borderRadius: '0 4px 4px 0'
    },
    error: {
      position: 'absolute',
      left: 4,
      bottom: -16,
      fontSize: 10,
      color: 'red'
    }
  }
}
