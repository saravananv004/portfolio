import React from 'react';
import { 
  Monitor, 
  Server, 
  Database, 
  ArrowDown, 
  ArrowRight, 
  ShieldCheck, 
  ShoppingCart, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';

export const WholesaleArchitectureDiagram: React.FC = () => {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/95 dark:bg-navy-950 border border-slate-800 text-slate-100 shadow-xl space-y-8">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <Layers className="w-5 h-5 text-brand-400" />
          <h4 className="text-base sm:text-lg font-bold text-white">
            System Architecture &amp; Data Flow
          </h4>
        </div>
        <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
          Decoupled Full-Stack Architecture
        </span>
      </div>

      {/* Main 3-Tier Layer Flow */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {/* Tier 1: Frontend */}
        <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col items-center text-center relative group hover:border-brand-500/50 transition-colors">
          <div className="p-3 rounded-xl bg-brand-500/20 text-brand-400 mb-3">
            <Monitor className="w-6 h-6" />
          </div>
          <h5 className="font-bold text-white text-base">React + Vite Client</h5>
          <p className="text-xs text-slate-400 mt-1 mb-3">
            Single Page Application with Tailwind styling &amp; client-side state
          </p>
          <div className="mt-auto flex flex-wrap justify-center gap-1.5 text-[11px] font-mono">
            <span className="bg-slate-700/70 text-brand-300 px-2 py-0.5 rounded">Admin Dashboard</span>
            <span className="bg-slate-700/70 text-brand-300 px-2 py-0.5 rounded">Public Catalog</span>
            <span className="bg-slate-700/70 text-brand-300 px-2 py-0.5 rounded">Khata Ledger</span>
          </div>
        </div>

        {/* Arrow on mobile / desktop */}
        <div className="hidden md:flex items-center justify-center -mx-3 text-brand-400">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">REST API</span>
            <ArrowRight className="w-6 h-6 animate-pulse" />
            <span className="text-[10px] font-mono text-cyan-400">JSON / JWT</span>
          </div>
        </div>
        <div className="md:hidden flex justify-center text-brand-400 -my-2">
          <ArrowDown className="w-5 h-5 animate-pulse" />
        </div>

        {/* Tier 2: Backend */}
        <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col items-center text-center relative group hover:border-cyan-500/50 transition-colors">
          <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-400 mb-3">
            <Server className="w-6 h-6" />
          </div>
          <h5 className="font-bold text-white text-base">FastAPI Backend</h5>
          <p className="text-xs text-slate-400 mt-1 mb-3">
            Python asynchronous web API with Pydantic validation &amp; JWT auth
          </p>
          <div className="mt-auto flex flex-wrap justify-center gap-1.5 text-[11px] font-mono">
            <span className="bg-slate-700/70 text-cyan-300 px-2 py-0.5 rounded">Routers &amp; Auth</span>
            <span className="bg-slate-700/70 text-cyan-300 px-2 py-0.5 rounded">Order Logic</span>
            <span className="bg-slate-700/70 text-cyan-300 px-2 py-0.5 rounded">Ledger Engine</span>
          </div>
        </div>

        {/* Arrow on mobile / desktop */}
        <div className="hidden md:flex items-center justify-center -mx-3 text-cyan-400">
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">SQLAlchemy</span>
            <ArrowRight className="w-6 h-6 animate-pulse" />
            <span className="text-[10px] font-mono text-emerald-400">ACID Ops</span>
          </div>
        </div>
        <div className="md:hidden flex justify-center text-cyan-400 -my-2">
          <ArrowDown className="w-5 h-5 animate-pulse" />
        </div>

        {/* Tier 3: Database */}
        <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col items-center text-center relative group hover:border-emerald-500/50 transition-colors">
          <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 mb-3">
            <Database className="w-6 h-6" />
          </div>
          <h5 className="font-bold text-white text-base">PostgreSQL Database</h5>
          <p className="text-xs text-slate-400 mt-1 mb-3">
            Relational storage enforcing referential integrity &amp; balance tracking
          </p>
          <div className="mt-auto flex flex-wrap justify-center gap-1.5 text-[11px] font-mono">
            <span className="bg-slate-700/70 text-emerald-300 px-2 py-0.5 rounded">Products &amp; Stock</span>
            <span className="bg-slate-700/70 text-emerald-300 px-2 py-0.5 rounded">Retailers &amp; Dues</span>
            <span className="bg-slate-700/70 text-emerald-300 px-2 py-0.5 rounded">Order Requests</span>
          </div>
        </div>
      </div>

      {/* Public Catalog Branch & Atomic Order Transaction Workflow */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
        {/* Public Catalog Order Request Flow */}
        <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-800">
          <div className="flex items-center gap-2 mb-3">
            <ShoppingCart className="w-4 h-4 text-amber-400" />
            <h5 className="text-sm font-bold text-white">Public Catalog &amp; Request Flow</h5>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">
              1. Public Catalog
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">
              2. Order Request
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">
              3. Business Review
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              4. Confirmation
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-3 leading-relaxed">
            Retail store owners can browse products without logging in and submit digital purchase requests. Wholesale administrators review pending requests in their dashboard before confirming.
          </p>
        </div>

        {/* Atomic Transaction Workflow */}
        <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-800">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <h5 className="text-sm font-bold text-white">Atomic Order Transaction Flow</h5>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">
              Create Order
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">
              Update Stock
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700">
              Update Ledger
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span className="px-2.5 py-1 rounded bg-brand-500/20 text-brand-300 border border-brand-500/30 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              Commit
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-3 leading-relaxed">
            The order creation, inventory deduction, and retailer balance update execute in a single database transaction. Either all changes succeed together or the entire operation rolls back, preventing inconsistent records.
          </p>
        </div>
      </div>
    </div>
  );
};
