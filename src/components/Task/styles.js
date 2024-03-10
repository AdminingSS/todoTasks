export default function() {
  const taskGrid = {
    display: 'grid',
    gridTemplateColumns: '20px 1fr 60px 60px 60px',
    alignItems: 'center',
    gridGap: 8,
    padding: '8px 0',
    textAlign: 'center',
    borderBottom: '1px solid #ccc'
  }
  return {
    root: {
      ...taskGrid
    },
    task: {
      fontWeight: 700,
      cursor: 'pointer'
    },
    currentTask: {
      color: '#e88302'
    },
    completedTask: {
      color: '#079f07'
    },
    iconButton: {
      width: 44,
      height: 44,
      padding: 0,
      color: '#333',
      backgroundColor: 'transparent',
      border: '2px solid #aaa'
    },
    statusIcon: {
      cursor: 'pointer'
    },
    icon: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    editTask: {
      display: 'flex',
      justifyContent: 'center',
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
    editTaskButton: {
      borderRadius: '0 4px 4px 0'
    },
    editButton: {
      color: '#ea9a01',
      borderColor: '#ea9a01'
    },
    deleteButton: {
      color: '#f75c11',
      borderColor: '#f75c11'
    }
  }
}
