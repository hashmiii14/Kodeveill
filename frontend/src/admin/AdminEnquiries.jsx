import React, { useState, useEffect } from "react";
import { getEnquiries, updateEnquiryStatus, deleteEnquiry } from "./api";
import { motion, AnimatePresence } from "framer-motion";
import {
  Inbox,
  Mail,
  Phone,
  Building2,
  Clock,
  Trash2,
  CheckCircle2,
  MailOpen,
  MessageSquareReply,
  ChevronDown,
  X,
  Search,
  Filter,
} from "lucide-react";

const STATUS_CONFIG = {
  new: { label: "New", color: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
  read: { label: "Read", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  replied: { label: "Replied", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
};

export const AdminEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const fetchEnquiries = async () => {
    try {
      const data = await getEnquiries();
      setEnquiries(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await updateEnquiryStatus(id, status);
      setEnquiries((prev) =>
        prev.map((e) => (e.id === id ? { ...e, status } : e))
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEnquiry(id);
      setEnquiries((prev) => prev.filter((e) => e.id !== id));
      setDeleteConfirm(null);
      if (selectedId === id) setSelectedId(null);
    } catch (err) {
      console.error(err);
    }
  };

  const filtered = enquiries
    .filter((e) => filter === "all" || e.status === filter)
    .filter(
      (e) =>
        search === "" ||
        e.name.toLowerCase().includes(search.toLowerCase()) ||
        e.email.toLowerCase().includes(search.toLowerCase()) ||
        e.message.toLowerCase().includes(search.toLowerCase())
    );

  const selected = enquiries.find((e) => e.id === selectedId);

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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-white">Enquiries</h1>
          <p className="mt-1 text-sm text-zinc-400">
            {enquiries.length} total · {enquiries.filter((e) => e.status === "new").length} unread
          </p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, email, or message..."
            className="w-full rounded-xl border border-white/10 bg-zinc-800 pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
          />
        </div>
        <div className="flex gap-2">
          {["all", "new", "read", "replied"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-lg px-3 py-2 text-xs font-medium capitalize transition-all ${
                filter === f
                  ? "bg-indigo-600 text-white"
                  : "bg-zinc-800 text-zinc-400 hover:text-white border border-white/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Table / List */}
      <div className="rounded-2xl border border-white/10 bg-zinc-900 overflow-hidden">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Inbox className="h-12 w-12 text-zinc-700 mb-4" />
            <p className="text-sm text-zinc-500">No enquiries found</p>
            <p className="mt-1 text-xs text-zinc-600">
              {search ? "Try adjusting your search or filter." : "Enquiries from the contact form will appear here."}
            </p>
          </div>
        ) : (
          <>
            {/* Desktop Header */}
            <div className="hidden lg:grid grid-cols-[1fr_1fr_0.7fr_0.5fr_auto] gap-4 border-b border-white/10 px-6 py-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
              <span>Contact</span>
              <span>Message</span>
              <span>Date</span>
              <span>Status</span>
              <span>Actions</span>
            </div>

            <div className="divide-y divide-white/5">
              {filtered.map((enq) => (
                <motion.div
                  key={enq.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`group cursor-pointer px-6 py-4 transition-all hover:bg-white/[0.02] ${
                    selectedId === enq.id ? "bg-indigo-500/5" : ""
                  }`}
                  onClick={() => setSelectedId(selectedId === enq.id ? null : enq.id)}
                >
                  {/* Desktop Row */}
                  <div className="hidden lg:grid grid-cols-[1fr_1fr_0.7fr_0.5fr_auto] gap-4 items-center">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-white truncate">{enq.name}</p>
                      <p className="text-xs text-zinc-500 truncate">{enq.email}</p>
                    </div>
                    <p className="text-sm text-zinc-400 truncate">{enq.message}</p>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                      <Clock className="h-3 w-3" />
                      {new Date(enq.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </div>
                    <span className={`inline-flex w-fit rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${STATUS_CONFIG[enq.status]?.color}`}>
                      {STATUS_CONFIG[enq.status]?.label}
                    </span>
                    <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                      {enq.status === "new" && (
                        <button onClick={() => handleStatusChange(enq.id, "read")} className="rounded-lg p-2 text-zinc-500 hover:bg-blue-500/10 hover:text-blue-400 transition-colors" title="Mark as Read">
                          <MailOpen className="h-4 w-4" />
                        </button>
                      )}
                      {enq.status !== "replied" && (
                        <button onClick={() => handleStatusChange(enq.id, "replied")} className="rounded-lg p-2 text-zinc-500 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors" title="Mark as Replied">
                          <MessageSquareReply className="h-4 w-4" />
                        </button>
                      )}
                      <button
                        onClick={() => setDeleteConfirm(enq.id)}
                        className="rounded-lg p-2 text-zinc-500 hover:bg-red-500/10 hover:text-red-400 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Mobile Row */}
                  <div className="lg:hidden">
                    <div className="flex items-center justify-between">
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-white truncate">{enq.name}</p>
                        <p className="text-xs text-zinc-500 truncate">{enq.email}</p>
                      </div>
                      <span className={`ml-3 inline-flex flex-shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${STATUS_CONFIG[enq.status]?.color}`}>
                        {STATUS_CONFIG[enq.status]?.label}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-zinc-400 line-clamp-2">{enq.message}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-zinc-600">
                        <Clock className="h-3 w-3" />
                        {new Date(enq.created_at).toLocaleDateString()}
                      </div>
                      <ChevronDown className={`h-4 w-4 text-zinc-600 transition-transform ${selectedId === enq.id ? "rotate-180" : ""}`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Expanded Detail Panel */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
          >
            <div className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-white">Enquiry Details</h3>
              <button onClick={() => setSelectedId(null)} className="rounded-lg p-1.5 text-zinc-500 hover:text-white transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-6 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Email</p>
                    <a href={`mailto:${selected.email}`} className="text-sm text-white hover:text-indigo-400 transition-colors">{selected.email}</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Phone</p>
                    <p className="text-sm text-white">{selected.phone || "N/A"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Business</p>
                    <p className="text-sm text-white">{selected.business || "N/A"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Submitted</p>
                    <p className="text-sm text-white">
                      {new Date(selected.created_at).toLocaleString("en-IN", {
                        day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">Message</p>
                <div className="rounded-xl border border-white/10 bg-zinc-800 p-4 text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap">
                  {selected.message}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href={`mailto:${selected.email}?subject=Re: Your Enquiry — Kodeveil&body=Hi ${selected.name},%0A%0AThank you for reaching out to us!%0A%0A`}
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 transition-colors"
                  onClick={() => handleStatusChange(selected.id, "replied")}
                >
                  <Mail className="h-4 w-4" /> Reply via Email
                </a>
                <a
                  href={`https://wa.me/${selected.phone?.replace(/\D/g, "") || ""}?text=Hi ${encodeURIComponent(selected.name)}, thank you for reaching out to Kodeveil!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-500 transition-colors"
                  onClick={() => handleStatusChange(selected.id, "replied")}
                >
                  <MessageSquareReply className="h-4 w-4" /> Reply via WhatsApp
                </a>
                {selected.status === "new" && (
                  <button
                    onClick={() => handleStatusChange(selected.id, "read")}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-800 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4" /> Mark as Read
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
            onClick={() => setDeleteConfirm(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-sm rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-display text-lg font-semibold text-white">Delete Enquiry?</h3>
              <p className="mt-2 text-sm text-zinc-400">
                This action cannot be undone. The enquiry will be permanently removed.
              </p>
              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setDeleteConfirm(null)}
                  className="flex-1 rounded-xl border border-white/10 bg-zinc-800 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(deleteConfirm)}
                  className="flex-1 rounded-xl bg-red-600 py-2.5 text-sm font-medium text-white hover:bg-red-500 transition-colors"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
