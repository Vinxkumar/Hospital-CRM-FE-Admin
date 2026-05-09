import { useEffect, useState } from "react"

type Log = {
createdAt: string
  message: string
  
}

export default function LogsTable() {
  const [logs, setLogs] = useState<Log[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchLogs = async () => {
      setLoading(true)
      try {
        const res = await fetch("/api/logs")
        const data: Log[] = await res.json()
        setLogs(data)
      } finally {
        setLoading(false)
      }
    }
    fetchLogs()
  }, [])

  if (loading) return <p className="text-white">Loading...</p>

  return (
    <div className="overflow-x-auto rounded-xl bg-zinc-800 p-4 ">
      <table className="w-full text-sm text-white">
        <thead>
          <tr className="border-b border-zinc-600 text-zinc-400">
            <th className="py-2 text-left">Time</th>
            <th className="py-2 text-left">Message</th>
            
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <tr key={log.createdAt} className="border-b border-zinc-700 hover:bg-zinc-700">
              <td className="py-2">{log.createdAt}</td>
              <td className="py-2">{log.message}</td>
              <td className="py-2 text-zinc-400">
                {new Date(log.createdAt).toLocaleString()}
              </td>
              <td className="py-2">{log.message}</td>
              <td className="py-2 text-zinc-400">
                {new Date(log.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {logs.length === 0 && (
        <p className="text-center text-zinc-500 py-4">No logs found</p>
      )}
    </div>
  )
}