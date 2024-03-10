export default function() {
  return {
    root: {
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
