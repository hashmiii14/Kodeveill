import React, { useState, useEffect } from "react";
import { getDashboard } from "./api";
import { motion } from "framer-motion";
import {
  Inbox,
  MailOpen,
  MessageSquareReply,
  TrendingUp,
  Clock,
  User,
  ArrowRight,
} from "lucide-react";

const StatCard = ({ icon: Icon, label, value, color, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="rounded-2xl border border-white/10 bg-zinc-900 p-6 transition-all hover:border-white/20"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">{label}</p>
        <p className="mt-2 font-display text-3xl font-bold text-white">{value}</p>
      </div>
      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${color}`}>
        <Icon className="h-5 w-5" />
      </div>
    </div>
  </motion.div>
);

export const AdminDashboard = ({ onNavigate }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDashboard()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <svg className="h-8 w-8 animate-spin text-indigo-400" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
        </svg>
      </div>
    );
  }

  if (!data) return <p className="text-zinc-400">Failed to load dashboard.</p>;

  const stats = [
    { icon: Inbox, label: "Total Enquiries", value: data.total_enquiries, color: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" },
    { icon: MailOpen, label: "New / Unread", value: data.new_enquiries, color: "bg-amber-500/10 text-amber-400 border border-amber-500/20" },
    { icon: MessageSquareReply, label: "Replied", value: data.replied_enquiries, color: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" },
    { icon: TrendingUp, label: "This Week", value: data.recent_week, color: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="font-display text-2xl font-bold text-white">Dashboard</h1>
        <p className="mt-1 text-sm text-zinc-400">Overview of your Kodeveil enquiries and activity.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <StatCard key={s.label} {...s} delay={i * 0.1} />
        ))}
      </div>

      {/* Recent Enquiries */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="rounded-2xl border border-white/10 bg-zinc-900 overflow-hidden"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h2 className="font-display text-lg font-semibold text-white">Recent Enquiries</h2>
          <button
            onClick={() => onNavigate("enquiries")}
            className="flex items-center gap-1 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors group"
          >
            View All <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {data.latest_enquiries.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Inbox className="h-10 w-10 text-zinc-700 mb-3" />
            <p className="text-sm text-zinc-500">No enquiries yet</p>
            <p className="mt-1 text-xs text-zinc-600">They'll appear here when someone submits the contact form.</p>
          </div>
        ) : (
          <div className="divide-y divide-white/5">
            {data.latest_enquiries.map((enq) => (
              <div key={enq.id} className="flex items-center gap-4 px-6 py-4 hover:bg-white/[0.02] transition-colors">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <User className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-white truncate">{enq.name}</p>
                    <span className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                      enq.status === "new"
                        ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        : enq.status === "replied"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : "bg-zinc-500/10 text-zinc-400 border border-zinc-500/20"
                    }`}>
                      {enq.status}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 truncate mt-0.5">{enq.message}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-600 flex-shrink-0">
                  <Clock className="h-3 w-3" />
                  {new Date(enq.created_at).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};
