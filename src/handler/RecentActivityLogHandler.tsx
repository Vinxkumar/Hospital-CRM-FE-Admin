import { useEffect, useState } from "react"
import api from "../Axios/Api"
import type { Log } from "../types/Log"


export default function LogsTable() {
  const [logs, setLogs] = useState<Log[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchLogs = async () => {
      setLoading(true)
      try {
        const res = await api.get("/admin/log")
        setLogs(res.data as Log[])
      } finally {
        setLoading(false)
      }
    }
    fetchLogs()
  }, [])

  if (loading) return <p className="text-white">Loading...</p>

  return (
    <div className="overflow-x-auto rounded-xl bg-slate-800 p-4">
      <table className="w-full text-sm text-white">
        <thead>
          <tr className="border-b border-slate-600 text-slate-400">
            <th className="py-2 text-left">Time</th>
            <th className="py-2 text-left">Message</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr
              key={log.id ?? index}
              className="border-b border-slate-700 hover:bg-slate-700"
            >
              <td className="py-2 text-slate-400">
                {new Date(log.timeStamp).toLocaleString()}
              </td>
              <td className="py-2">{log.log}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {logs.length === 0 && (
        <p className="text-center text-slate-500 py-4">No logs found</p>
      )}
    </div>
  )
}