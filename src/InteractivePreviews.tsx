import React, { useState } from 'react';
import { ChevronRight, CheckCircle, Search as SearchIcon, X, CircleAlert, Plus, Check, RefreshCw, Loader2, CircleCheck, AlertCircle, Info, Bell, Trash2, ChevronDown, Settings2, MoreHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const CalendarPreview = () => {
  const [selectedDate, setSelectedDate] = useState(22);
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-3 p-4 space-y-4">
       <div className="flex justify-between items-center text-[15px] font-bold">
          <span className="text-neutral-10 cursor-pointer hover:text-brand transition-colors">2026年4月</span>
          <div className="flex gap-4 text-neutral-6">
             <ChevronRight className="rotate-180 cursor-pointer hover:text-neutral-12 transition-colors" size={18} />
             <ChevronRight className="cursor-pointer hover:text-neutral-12 transition-colors" size={18} />
          </div>
       </div>
       <div className="grid grid-cols-7 gap-y-2 gap-x-1 text-center text-[12px]">
          {['日','一','二','三','四','五','六'].map(d=><div key={d} className="text-neutral-5 font-bold pb-2">{d}</div>)}
          {[...Array(30)].map((_,i)=>{
             const d = i+1;
             const active = d === selectedDate;
             return (
               <div 
                 key={'day-'+d} 
                 onClick={() => setSelectedDate(d)}
                 className={`h-9 w-9 mx-auto flex items-center justify-center rounded-full cursor-pointer transition-all active:scale-95 ${
                   active ? 'bg-brand text-white font-bold shadow-md shadow-brand/30' : 'text-neutral-11 hover:bg-neutral-2'
                 }`}
               >
                 {d}
               </div>
             )
          })}
       </div>
    </div>
  );
};

export const CascaderPreview = () => {
  const [selectedProvince, setSelectedProvince] = useState('广东省');
  const [selectedCity, setSelectedCity] = useState('深圳市');
  const [selectedDistrict, setSelectedDistrict] = useState('南山区');

  const provinces = ['广东省', '浙江省', '江苏省'];
  const cities: Record<string, string[]> = {
    '广东省': ['深圳市', '广州市', '珠海市', '东莞市'],
    '浙江省': ['杭州市', '宁波市', '温州市'],
    '江苏省': ['南京市', '苏州市', '无锡市']
  };
  const districts: Record<string, string[]> = {
    '深圳市': ['南山区', '福田区', '宝安区', '龙岗区'],
    '广州市': ['天河区', '越秀区', '海珠区'],
    '珠海市': ['香洲区', '斗门区', '金湾区'],
    '杭州市': ['西湖区', '上城区', '余杭区'],
    '南京市': ['玄武区', '秦淮区', '建邺区']
  };

  const activeCities = cities[selectedProvince] || [];
  const activeDistricts = districts[selectedCity] || [];

  return (
    <div className="bg-white rounded-lg border border-neutral-3 flex shadow-sm h-48 overflow-hidden text-[13px]">
       <div className="flex-1 border-r border-neutral-3 bg-neutral-1 text-center py-2 space-y-1 overflow-y-auto scrollbar-hide">
          {provinces.map(p => (
            <div 
              key={p} 
              onClick={() => { setSelectedProvince(p); setSelectedCity(cities[p][0]); setSelectedDistrict((districts[cities[p][0]] || [])[0]); }}
              className={`py-2 cursor-pointer transition-colors ${selectedProvince === p ? 'text-brand font-bold bg-white' : 'text-neutral-7 hover:text-neutral-10'}`}
            >
              {p}
            </div>
          ))}
       </div>
       <div className="flex-1 border-r border-neutral-3 bg-neutral-1 text-center py-2 space-y-1 overflow-y-auto scrollbar-hide">
          {activeCities.map(c => (
            <div 
              key={c}
              onClick={() => { setSelectedCity(c); setSelectedDistrict((districts[c] || [])[0]); }}
              className={`py-2 cursor-pointer transition-colors ${selectedCity === c ? 'text-brand font-bold bg-white' : 'text-neutral-7 hover:text-neutral-10'}`}
            >
              {c}
            </div>
          ))}
       </div>
       <div className="flex-1 bg-white text-center py-2 space-y-1 overflow-y-auto scrollbar-hide text-neutral-11">
          {activeDistricts.map(d => (
            <div 
              key={d}
              onClick={() => setSelectedDistrict(d)}
              className={`py-2 cursor-pointer flex items-center justify-center gap-1 transition-colors ${selectedDistrict === d ? 'text-brand font-bold' : 'hover:text-neutral-10'}`}
            >
              {d} {selectedDistrict === d && <CheckCircle size={12}/>}
            </div>
          ))}
       </div>
    </div>
  );
};

export const DateTimePickerPreview = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-3 overflow-hidden cursor-pointer group hover:border-brand/40 transition-colors relative">
       <div className="flex justify-between items-center px-4 py-3 border-b border-neutral-3 text-[14px]">
          <span className="text-neutral-6 hover:text-neutral-9 transition-colors">取消</span>
          <span className="font-bold text-neutral-11">选择时间</span>
          <span className="text-brand font-bold active:opacity-60 transition-opacity">确定</span>
       </div>
       <div className="relative h-40 flex justify-center items-center text-[16px] font-bold overflow-hidden bg-white">
          <div className="absolute top-1/2 left-0 w-full h-10 -translate-y-1/2 bg-brand/5 border-y border-brand/20 pointer-events-none" />
          
          <div className="flex w-full text-center z-10 px-8">
             <div className="flex-1 space-y-3 -translate-y-1 transition-transform cursor-ns-resize selection:bg-transparent">
                <div className="opacity-30 text-[14px]">09</div>
                <div className="opacity-60 text-[15px]">10</div>
                <div className="text-brand scale-110">11</div>
                <div className="opacity-60 text-[15px]">12</div>
                <div className="opacity-30 text-[14px]">13</div>
             </div>
             <div className="flex-1 mx-2 text-neutral-5 flex items-center justify-center font-black pb-1">:</div>
             <div className="flex-1 space-y-3 -translate-y-1 transition-transform cursor-ns-resize selection:bg-transparent">
                <div className="opacity-30 text-[14px]">28</div>
                <div className="opacity-60 text-[15px]">29</div>
                <div className="text-brand scale-110">30</div>
                <div className="opacity-60 text-[15px]">31</div>
                <div className="opacity-30 text-[14px]">32</div>
             </div>
          </div>
          
          {/* Scroll overlays */}
          <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
       </div>
    </div>
  );
};

export const FormPreview = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-3 divide-y divide-neutral-2 overflow-hidden">
       <div className="px-5 py-4 flex items-center justify-between group focus-within:bg-brand/5 transition-colors">
          <span className="text-[14px] text-neutral-11 font-medium w-20">姓名</span>
          <input 
            type="text" 
            placeholder="请输入姓名" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-right text-[14px] outline-none flex-1 bg-transparent text-neutral-12 placeholder:text-neutral-5 font-medium" 
          />
       </div>
       <div className="px-5 py-4 flex items-center justify-between group focus-within:bg-brand/5 transition-colors">
          <span className="text-[14px] text-neutral-11 font-medium w-20">手机号</span>
          <input 
            type="tel" 
            placeholder="请输入手机号" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="text-right text-[14px] outline-none flex-1 bg-transparent text-neutral-12 placeholder:text-neutral-5 font-medium" 
          />
       </div>
       <div 
         className="px-5 py-4 flex items-center justify-between cursor-pointer active:bg-neutral-2 transition-colors group"
         onClick={() => setGender(gender === '男' ? '女' : '男')}
       >
          <span className="text-[14px] text-neutral-11 font-medium w-20">性别</span>
          <div className="flex items-center gap-1 text-[14px]">
             {gender ? (
               <span className="text-neutral-12 font-medium">{gender}</span>
             ) : (
               <span className="text-neutral-5">请选择</span>
             )}
             <ChevronRight size={16} className="text-neutral-4 group-hover:text-brand transition-colors"/>
          </div>
       </div>
    </div>
  );
};

export const PickerPreview = () => {
  const options = ['视觉设计', '交互开发', '产品经理', '测试工程师'];
  const [selectedIdx, setSelectedIdx] = useState(1);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-3 overflow-hidden cursor-pointer hover:border-brand/40 transition-colors group relative">
       <div className="flex justify-between items-center px-4 py-3 border-b border-neutral-3 text-[14px]">
          <span className="text-neutral-6 hover:text-neutral-9 transition-colors">取消</span>
          <span className="font-bold text-neutral-11">选择偏好</span>
          <span className="text-brand font-bold active:opacity-60 transition-opacity">确定</span>
       </div>
       <div className="relative h-40 flex justify-center items-center text-[16px] font-bold overflow-hidden bg-white">
          <div className="absolute top-1/2 left-0 w-full h-10 -translate-y-1/2 bg-brand/5 border-y border-brand/20 pointer-events-none" />
          <div className="w-full text-center z-10 px-8 flex flex-col gap-3 selection:bg-transparent -translate-y-1">
             {options.map((opt, idx) => {
               const offset = Math.abs(idx - selectedIdx);
               let opacity = 'opacity-10';
               let scale = 'scale-90';
               let color = 'text-neutral-8';
               if (offset === 0) { opacity = 'opacity-100'; scale = 'scale-110'; color = 'text-brand'; }
               else if (offset === 1) { opacity = 'opacity-50'; scale = 'scale-100'; color = 'text-neutral-11'; }
               else if (offset === 2) { opacity = 'opacity-20'; scale = 'scale-95'; color = 'text-neutral-10'; }
               
               return (
                 <div key={opt} onClick={() => setSelectedIdx(idx)} className={`transition-all duration-300 cursor-pointer ${opacity} ${scale} ${color}`}>
                   {opt}
                 </div>
               );
             })}
          </div>
          <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
       </div>
    </div>
  );
};

export const SearchPreview = () => {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('按钮');
  
  return (
    <div className="space-y-5">
       <div className={`bg-neutral-2 rounded-full px-4 py-2.5 flex items-center gap-2 border transition-all ${val1 ? 'border-brand/30 bg-brand/5' : 'border-transparent focus-within:border-brand/40 focus-within:bg-white'}`}>
          <SearchIcon size={18} className={val1 ? 'text-brand' : 'text-neutral-6'} />
          <input 
            type="text" 
            placeholder="搜索组件名称" 
            value={val1}
            onChange={(e) => setVal1(e.target.value)}
            className="bg-transparent outline-none text-[14px] flex-1 font-medium text-neutral-12 placeholder:text-neutral-5 placeholder:font-normal" 
          />
          {val1 && (
            <div onClick={() => setVal1('')} className="bg-neutral-4 hover:bg-neutral-5 text-white rounded-full p-0.5 cursor-pointer transition-colors"><X size={12} strokeWidth={3} /></div>
          )}
       </div>
       
       <div className="bg-white border border-brand ring-4 ring-brand/10 rounded-full px-4 py-2.5 flex items-center gap-2 shadow-sm">
          <SearchIcon size={18} className="text-brand" />
          <input 
            type="text" 
            value={val2} 
            onChange={e => setVal2(e.target.value)}
            className="bg-transparent outline-none text-[14px] flex-1 font-bold text-neutral-12" 
          />
          {val2 && (
            <div onClick={() => setVal2('')} className="bg-neutral-4 hover:bg-neutral-6 text-white rounded-full p-0.5 cursor-pointer transition-colors"><X size={12} strokeWidth={3} /></div>
          )}
       </div>
    </div>
  );
};

export const StepperPreview = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="flex items-center gap-6 p-6 bg-white rounded-xl border border-neutral-3 shadow-sm justify-center">
       <div className="flex items-center bg-neutral-2 rounded-lg p-1 border border-neutral-3/50 shadow-inner">
          <button 
            onClick={() => setCount(Math.max(0, count - 1))}
            className="w-10 h-10 flex items-center justify-center text-neutral-7 hover:text-neutral-11 bg-white rounded-md shadow-sm border border-neutral-2 active:scale-95 transition-all text-xl"
          >
            -
          </button>
          <div className="w-14 text-center text-[16px] font-bold text-brand">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={count}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.15 }}
              >
                {count}
              </motion.div>
            </AnimatePresence>
          </div>
          <button 
            onClick={() => setCount(count + 1)}
            className="w-10 h-10 flex items-center justify-center text-neutral-7 hover:text-brand bg-white rounded-md shadow-sm border border-neutral-2 active:scale-95 transition-all text-xl"
          >
            +
          </button>
       </div>
    </div>
  );
};

export const TextareaPreview = () => {
  const [text, setText] = useState('');
  const maxLength = 200;
  
  return (
    <div className={`bg-white rounded-xl border p-4 shadow-sm transition-colors ${text.length > 0 ? 'border-brand/40 shadow-brand/5' : 'border-neutral-3 focus-within:border-brand focus-within:shadow-md'}`}>
       <textarea 
         rows={4} 
         placeholder="请输入您的宝贵意见..." 
         value={text}
         onChange={(e) => setText(e.target.value.substring(0, maxLength))}
         className="w-full text-[14px] outline-none resize-none bg-transparent text-neutral-12 placeholder:text-neutral-5 leading-relaxed font-medium" 
       />
       <div className="flex items-center justify-between mt-2">
          {text.length > 0 ? (
            <span className="text-[12px] text-brand font-medium">输入中...</span>
          ) : (
            <span className="text-[12px] text-transparent">_</span>
          )}
          <div className="text-right text-[12px] text-neutral-5 font-mono font-medium bg-neutral-1 px-2 py-0.5 rounded-full border border-neutral-2">
            <span className={text.length >= maxLength ? 'text-error' : text.length > 0 ? 'text-brand' : ''}>{text.length}</span> 
            <span className="mx-0.5">/</span> {maxLength}
          </div>
       </div>
    </div>
  );
};

export const UploadPreview = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);
  
  const simulateUpload = () => {
    if (uploading || complete) {
      if (complete) {
        setComplete(false);
        setProgress(0);
      }
      return;
    }
    
    setUploading(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setUploading(false);
          setComplete(true);
          return 100;
        }
        return p + 10;
      });
    }, 200);
  };
  
  return (
    <div className="flex flex-wrap gap-5">
       <div 
         onClick={simulateUpload}
         className="w-24 h-24 bg-neutral-1 border-2 border-dashed border-neutral-4 rounded-2xl flex flex-col items-center justify-center text-neutral-6 cursor-pointer hover:bg-neutral-2 hover:border-brand/40 hover:text-brand transition-all active:scale-95 group"
       >
          <Plus size={24} className="mb-2 group-hover:scale-110 transition-transform" />
          <span className="text-[11px] font-medium">点击上传</span>
       </div>
       
       <AnimatePresence>
         {uploading && (
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             exit={{ opacity: 0, scale: 0.9 }}
             className="w-24 h-24 bg-brand-light border border-brand/30 rounded-2xl flex flex-col items-center justify-center text-brand relative overflow-hidden shadow-inner"
           >
              <div className="absolute inset-0 bg-brand/10 animate-pulse" />
              <div className="text-[12px] font-bold z-10 mb-2">{progress}%</div>
              <div className="w-16 h-1.5 bg-white/50 rounded-full overflow-hidden z-10 shadow-sm border border-brand/10">
                 <div 
                   className="h-full bg-brand rounded-full transition-all duration-200 ease-out" 
                   style={{ width: `${progress}%` }} 
                 />
              </div>
           </motion.div>
         )}
         
         {complete && (
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="w-24 h-24 bg-success border border-success/30 rounded-2xl flex flex-col items-center justify-center text-white relative shadow-lg shadow-success/20 overflow-hidden cursor-pointer"
             onClick={() => setComplete(false)} // Reset on click
           >
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
              <Check size={32} className="mb-1 drop-shadow-md" strokeWidth={3} />
              <span className="text-[10px] font-bold tracking-widest uppercase">已上传</span>
           </motion.div>
         )}
       </AnimatePresence>
    </div>
  );
};

export const RadioPreview = () => {
  const [selected, setSelected] = useState('选项一');
  
  return (
    <div className="space-y-6">
       <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-3 space-y-4">
          {['选项一', '选项二'].map(opt => {
            const active = selected === opt;
            return (
              <div 
                key={opt}
                className="flex items-center justify-between cursor-pointer group"
                onClick={() => setSelected(opt)}
              >
                 <span className={`text-[15px] font-medium transition-colors ${active ? 'text-brand' : 'text-neutral-11'}`}>{opt}</span>
                 <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${active ? 'border-brand bg-brand shadow-sm shadow-brand/20' : 'border-neutral-4 bg-white group-hover:border-brand/50'}`}>
                    <AnimatePresence>
                      {active && (
                         <motion.div 
                           initial={{ scale: 0 }} 
                           animate={{ scale: 1 }} 
                           exit={{ scale: 0 }}
                           className="w-2 h-2 bg-white rounded-full bg-white"
                         />
                      )}
                    </AnimatePresence>
                 </div>
              </div>
            );
          })}
       </div>
       <div className="grid grid-cols-2 gap-3">
          {['微信支付', '支付宝'].map(opt => {
            const active = selected === opt;
            return (
              <div 
                key={opt}
                className={`py-3 px-4 rounded-xl border text-center text-[13px] font-bold cursor-pointer transition-all ${
                  active ? 'border-brand bg-brand/5 text-brand shadow-sm' : 'border-neutral-3 bg-white text-neutral-11 hover:border-brand/40'
                }`}
                onClick={() => setSelected(opt)}
              >
                {opt}
              </div>
            );
          })}
       </div>
    </div>
  );
};

export const InputPreview = () => {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('G-Link User');
  const [val3, setVal3] = useState('13800138000');
  const [val4, setVal4] = useState('Invalid Content');
  
  return (
    <div className="space-y-8">
       <div className="space-y-4">
          <h4 className="text-[14px] font-bold text-neutral-12 mb-2">01 基础交互态</h4>
          <div className={`bg-white rounded-xl border p-3.5 transition-all shadow-sm ${val1 ? 'border-brand/40 shadow-brand/5' : 'border-neutral-3 focus-within:border-brand focus-within:shadow-md'}`}>
             <div className="text-[12px] text-neutral-8 mb-1.5 font-medium transition-colors focus-within:text-brand">用户名</div>
             <input 
               type="text" 
               placeholder="请输入账号名称" 
               value={val1}
               onChange={(e) => setVal1(e.target.value)}
               className="w-full text-[15px] outline-none bg-transparent font-medium text-neutral-12 placeholder:text-neutral-5 placeholder:font-normal" 
             />
          </div>
          <div className="bg-neutral-2 rounded-xl border border-neutral-3 px-4 py-3.5 opacity-70">
             <div className="text-[12px] text-neutral-7 mb-1 font-medium">用户角色 (禁用态)</div>
             <input type="text" value={val2} disabled className="w-full text-[15px] outline-none bg-transparent text-neutral-9 cursor-not-allowed font-medium" />
          </div>
       </div>
       
       <div className="space-y-4">
          <h4 className="text-[14px] font-bold text-neutral-12 mb-2">02 操作与反馈</h4>
          <div className="bg-white rounded-xl border border-neutral-3 px-4 py-4 flex items-center gap-3 focus-within:border-brand transition-colors shadow-sm focus-within:shadow-md">
             <input 
               type="text" 
               value={val3}
               onChange={(e) => setVal3(e.target.value)}
               className="flex-1 text-[15px] outline-none font-medium tracking-wide" 
             />
             {val3 && (
               <X 
                 size={18} 
                 onClick={() => setVal3('')}
                 className="bg-neutral-3 hover:bg-neutral-5 text-white rounded-full p-0.5 cursor-pointer transition-colors" 
               />
             )}
          </div>
          
          <div className="bg-error/5 rounded-xl border shadow-sm border-error px-4 py-3.5 transition-all">
             <input 
               type="text" 
               value={val4}
               onChange={e => setVal4(e.target.value)}
               className="w-full text-[15px] outline-none text-error font-medium bg-transparent" 
             />
             <div className="text-[11px] text-error mt-2 flex items-center gap-1.5 font-medium bg-error/10 py-1 px-2 rounded w-fit">
                <CircleAlert size={12} strokeWidth={2.5}/>
                请检查您的输入格式
             </div>
          </div>
       </div>
    </div>
  );
};

export const SwitchPreview = () => {
  const [on1, setOn1] = useState(true);
  const [on2, setOn2] = useState(false);
  const [on3, setOn3] = useState(true);
  const [on4, setOn4] = useState(false);
  
  return (
    <div className="space-y-6">
       <div className="bg-white rounded-xl shadow-sm border border-neutral-3 divide-y divide-neutral-2 px-5">
          <div className="py-5 flex justify-between items-center group cursor-pointer" onClick={() => setOn1(!on1)}>
             <span className="text-[15px] font-medium transition-colors group-hover:text-brand">Wi-Fi 分解开关</span>
             <div className={`w-[46px] h-[26px] rounded-full relative flex items-center px-1 transition-colors duration-300 ${on1 ? 'bg-brand' : 'bg-neutral-4'}`}>
                <motion.div 
                  className="w-4 h-4 bg-white rounded-full shadow-md"
                  animate={{ x: on1 ? 20 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
             </div>
          </div>
          <div className="py-5 flex justify-between items-center group cursor-pointer" onClick={() => setOn2(!on2)}>
             <span className="text-[15px] font-medium transition-colors group-hover:text-brand">暗黑模式</span>
             <div className={`w-[46px] h-[26px] rounded-full relative flex items-center px-1 transition-colors duration-300 ${on2 ? 'bg-brand' : 'bg-neutral-4'}`}>
                <motion.div 
                  className="w-4 h-4 bg-white rounded-full shadow-md"
                  animate={{ x: on2 ? 20 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
             </div>
          </div>
       </div>

       <div className="flex items-center gap-6 justify-center bg-white p-6 rounded-2xl shadow-sm border border-neutral-3">
          <div 
            className={`w-[52px] h-[30px] rounded-full flex items-center px-[3px] cursor-pointer transition-colors duration-300 ${on3 ? 'bg-brand shadow-inner shadow-brand/20' : 'bg-neutral-4 shadow-inner'}`}
            onClick={() => setOn3(!on3)}
          >
             <motion.div 
               className="w-6 h-6 bg-white rounded-full shadow-md"
               animate={{ x: on3 ? 20 : 0 }}
               transition={{ type: "spring", stiffness: 500, damping: 30 }}
             />
          </div>
          
          {/* Disabled states */}
          <div className="w-[52px] h-[30px] bg-neutral-3 rounded-full flex items-center px-[3px] opacity-60 cursor-not-allowed">
             <div className="w-6 h-6 bg-white rounded-full shadow-md opacity-80" />
          </div>
       </div>
    </div>
  );
};

export const CheckboxPreview = () => {
  const [c1, setC1] = useState(true);
  const [c2, setC2] = useState(false);
  
  return (
    <div className="space-y-6">
       <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-3 space-y-5">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setC1(!c1)}>
             <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${c1 ? 'bg-brand border-brand shadow-sm shadow-brand/20' : 'bg-white border-neutral-4 group-hover:border-brand/50'}`}>
                <AnimatePresence>
                  {c1 && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <CheckSquare size={14} className="text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
             <span className={`text-[15px] font-medium transition-colors ${c1 ? 'text-brand' : 'text-neutral-11'}`}>保持登录状态</span>
          </div>
          
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setC2(!c2)}>
             <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${c2 ? 'bg-brand border-brand shadow-sm shadow-brand/20' : 'bg-white border-neutral-4 group-hover:border-brand/50'}`}>
                <AnimatePresence>
                  {c2 && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <CheckSquare size={14} className="text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
             <span className={`text-[15px] font-medium transition-colors ${c2 ? 'text-brand' : 'text-neutral-11'}`}>接收活动推送</span>
          </div>
          
          <div className="flex items-center gap-4 opacity-50 cursor-not-allowed">
             <div className="w-5 h-5 rounded border border-neutral-4 bg-neutral-3 flex items-center justify-center">
                <CheckSquare size={14} className="text-neutral-5" />
             </div>
             <span className="text-[15px] font-medium text-neutral-8">基础服务 (不可更改)</span>
          </div>
       </div>
       
       <div className="px-5 py-4 bg-neutral-1 border border-neutral-3 rounded-xl hover:border-brand/30 transition-colors flex gap-3 cursor-pointer group">
          <div className="pt-0.5">
             <div className="w-4 h-4 rounded border border-brand bg-brand flex items-center justify-center shadow-sm shadow-brand/20">
                <CheckSquare size={10} className="text-white" />
             </div>
          </div>
          <p className="text-[13px] text-neutral-8 leading-relaxed font-medium">
             我已阅读并完全同意 <span className="text-brand font-bold">《广联隐私政策》</span> 与 <span className="text-brand font-bold">《用户服务协议》</span>
          </p>
       </div>
    </div>
  );
};

// --- Display Components Previews ---

export const CellPreview = () => {
  const [switch1, setSwitch1] = useState(true);
  const [switch2, setSwitch2] = useState(false);

  return (
    <div className="space-y-8 h-full bg-neutral-2 -mx-5 px-5 py-4">
       <div className="space-y-3">
          <h4 className="text-[14px] font-bold text-neutral-12">01 基础列表</h4>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-neutral-3">
            <div className="px-4 py-3.5 flex items-center justify-between border-b border-neutral-2 active:bg-neutral-1 hover:bg-neutral-50 transition-colors cursor-pointer">
               <span className="text-sm font-medium text-neutral-11">单行列表</span>
               <ChevronRight size={18} className="text-neutral-5" />
            </div>
            <div className="px-4 py-3.5 flex items-center justify-between active:bg-neutral-1 hover:bg-neutral-50 transition-colors cursor-pointer">
               <span className="text-sm font-medium text-neutral-11">单行列表</span>
               <div className="flex items-center gap-2">
                  <span className="text-sm text-neutral-6">详细信息</span>
                  <ChevronRight size={18} className="text-neutral-5" />
               </div>
            </div>
          </div>
       </div>

       <div className="space-y-3">
          <h4 className="text-[14px] font-bold text-neutral-12">02 带元素的列表</h4>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-neutral-3">
            <div className="px-4 py-3.5 flex items-center justify-between border-b border-neutral-2">
               <div className="flex items-center gap-3">
                  <SearchIcon size={20} className="text-brand" />
                  <span className="text-sm font-medium text-neutral-11">接受新消息通知</span>
               </div>
               <div 
                 onClick={() => setSwitch1(!switch1)}
                 className={`w-11 h-6 rounded-full p-1 transition-colors cursor-pointer ${switch1 ? 'bg-brand' : 'bg-neutral-4'}`}
               >
                  <motion.div 
                     layout
                     initial={false}
                     animate={{ x: switch1 ? 20 : 0 }}
                     className="w-4 h-4 bg-white rounded-full shadow-sm"
                  />
               </div>
            </div>
            <div className="px-4 py-3.5 flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-light text-brand flex items-center justify-center font-bold text-xs">GL</span>
                  <div>
                    <div className="text-sm font-medium text-neutral-11">勿扰模式</div>
                    <div className="text-xs text-neutral-6 mt-0.5">开启后不再弹出提醒</div>
                  </div>
               </div>
               <div 
                 onClick={() => setSwitch2(!switch2)}
                 className={`w-11 h-6 rounded-full p-1 transition-colors cursor-pointer ${switch2 ? 'bg-brand' : 'bg-neutral-4'}`}
               >
                  <motion.div 
                     layout
                     initial={false}
                     animate={{ x: switch2 ? 20 : 0 }}
                     className="w-4 h-4 bg-white rounded-full shadow-sm"
                  />
               </div>
            </div>
          </div>
       </div>
    </div>
  );
};

export const AvatarPreview = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  
  return (
    <div className="space-y-10">
       <div className="space-y-4">
          <p className="text-sm text-neutral-8 font-bold">交互式头像</p>
          <div className="flex items-end gap-6">
             <div className="w-16 h-16 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-xl cursor-pointer hover:bg-brand hover:text-white transition-colors duration-300 shadow-sm hover:shadow-brand/20 hover:scale-105">L</div>
             <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-lg cursor-pointer hover:bg-brand hover:text-white transition-colors duration-300 shadow-sm hover:shadow-brand/20 hover:scale-105">M</div>
             <div className="w-8 h-8 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-sm cursor-pointer hover:bg-brand hover:text-white transition-colors duration-300 shadow-sm hover:shadow-brand/20 hover:scale-105">S</div>
          </div>
       </div>
       
       <div className="space-y-4">
          <p className="text-sm text-neutral-8 font-bold">头像组 (悬停展开)</p>
          <div className="flex -space-x-4 hover:space-x-1 transition-all duration-300 p-2">
             {[1, 2, 3, 4].map(idx => (
                <div 
                  key={idx} 
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                  className={`w-12 h-12 rounded-full border-2 border-white flex items-center justify-center shadow-sm z-0 transition-transform cursor-pointer
                    ${hovered === idx ? '-translate-y-2 bg-brand text-white border-brand' : 'bg-neutral-2 text-neutral-5'}
                  `}
                >
                   <span className="font-bold text-sm">{idx}</span>
                </div>
             ))}
             <div className="w-12 h-12 rounded-full bg-neutral-2 border-2 border-white flex items-center justify-center opacity-80 shadow-sm z-0 hover:bg-neutral-3 cursor-pointer">
                <span className="text-xs text-neutral-8 font-medium">+3</span>
             </div>
          </div>
       </div>
    </div>
  );
};

export const BadgePreview = () => {
  const [count, setCount] = useState(99);

  return (
    <div className="space-y-10 flex flex-col items-center pt-10">
       <div className="flex gap-12">
          <div className="relative group cursor-pointer" onClick={() => setCount(0)}>
             <div className="w-12 h-12 bg-neutral-3 rounded-xl flex items-center justify-center group-hover:bg-neutral-4 transition-colors">
                <span className="text-neutral-8 group-hover:scale-110 transition-transform">🔔</span>
             </div>
             <AnimatePresence>
               <motion.div 
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 exit={{ scale: 0 }}
                 className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-error rounded-full border-2 border-white" 
               />
             </AnimatePresence>
          </div>
          <div className="relative group cursor-pointer" onClick={() => setCount(c => c + 1)}>
             <div className="w-12 h-12 bg-neutral-3 rounded-xl flex items-center justify-center group-hover:bg-neutral-4 transition-colors">
                <span className="text-neutral-8 group-hover:scale-110 transition-transform">💬</span>
             </div>
             <AnimatePresence>
               {count > 0 && (
                 <motion.div 
                   key={count}
                   initial={{ scale: 1.5, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   className="absolute -top-2 -right-2 px-1.5 py-0.5 bg-error text-white text-[10px] font-bold rounded-full border-2 border-white shadow-sm"
                 >
                   {count > 99 ? '99+' : count}
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
       </div>
       
       <div className="w-full bg-white p-4 rounded-xl shadow-sm border border-neutral-3 hover:border-brand/30 transition-colors cursor-pointer group" onClick={() => setCount(0)}>
          <div className="flex items-center justify-between">
             <span className="text-sm font-medium group-hover:text-brand transition-colors">系统通知 <span className="text-xs text-neutral-5 ml-1">(点击清除)</span></span>
             <AnimatePresence>
               {count > 0 && (
                 <motion.div 
                   initial={{ opacity: 0, x: 10 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, scale: 0.8 }}
                   className="px-2 py-0.5 bg-error text-white text-[10px] rounded-full shadow-sm"
                 >
                   New
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
       </div>
    </div>
  );
};

export const CollapsePreview = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const list = [
    { title: '订单详细信息', content: '订单号：2024102930291\n下单时间：2024-10-29 18:30:00\n买家留言：请尽快发货，谢谢！' },
    { title: '配送信息', content: '承运物流：顺丰速运\n运单编号：SF1234567890\n预计到达：明天 14:00 前' },
    { title: '退换货规则', content: '商品支持7天无理由退换货（部分特殊商品除外）。详情请参阅平台售后政策。' }
  ];

  return (
    <div className="space-y-4">
       {list.map((item, idx) => {
         const isOpen = openIndex === idx;
         return (
           <div key={idx} className={`border rounded-xl bg-white overflow-hidden transition-all duration-300 ${isOpen ? 'border-brand/40 shadow-md shadow-brand/5' : 'border-neutral-3 shadow-sm hover:border-neutral-4'}`}>
              <div 
                className={`flex items-center justify-between p-4 cursor-pointer transition-colors ${isOpen ? 'bg-brand/5' : 'hover:bg-neutral-1'}`}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                 <h5 className={`font-bold text-sm ${isOpen ? 'text-brand' : 'text-neutral-11'}`}>{item.title}</h5>
                 <ChevronRight size={18} className={`transition-transform duration-300 ${isOpen ? 'rotate-90 text-brand' : 'text-neutral-6'}`} />
              </div>
              <AnimatePresence initial={false}>
                {isOpen && (
                   <motion.div
                     initial={{ height: 0, opacity: 0 }}
                     animate={{ height: 'auto', opacity: 1 }}
                     exit={{ height: 0, opacity: 0 }}
                     transition={{ duration: 0.3 }}
                   >
                     <div className="p-4 pt-2 text-sm text-neutral-7 border-t border-brand/10 bg-white whitespace-pre-line leading-relaxed">
                        {item.content}
                     </div>
                   </motion.div>
                )}
              </AnimatePresence>
           </div>
         );
       })}
    </div>
  );
};

export const CountDownPreview = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const reset = () => setTimeLeft(3600);

  const h = Math.floor(timeLeft / 3600).toString().padStart(2, '0');
  const m = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, '0');
  const s = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <div className="space-y-10 flex flex-col items-center group relative p-4">
       <button onClick={reset} className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] bg-neutral-2 px-2 py-1 rounded text-neutral-7 hover:text-neutral-10 flex items-center gap-1"><RefreshCw size={10}/> 重置</button>
       <div className="space-y-3 flex flex-col items-center">
          <p className="text-xs text-neutral-8 font-bold uppercase tracking-widest">区块样式</p>
          <div className="flex items-center gap-2 text-brand font-bold text-xl">
             <div className="bg-brand/10 w-10 h-10 flex items-center justify-center rounded-lg shadow-inner">{h}</div>
             <span className="animate-pulse">:</span>
             <div className="bg-brand/10 w-10 h-10 flex items-center justify-center rounded-lg shadow-inner">{m}</div>
             <span className="animate-pulse">:</span>
             <div className="bg-brand/10 w-10 h-10 flex items-center justify-center rounded-lg shadow-inner">{s}</div>
          </div>
       </div>

       <div className="space-y-3 flex flex-col items-center">
          <p className="text-xs text-neutral-8 font-bold uppercase tracking-widest">文本样式</p>
          <div className="flex items-center gap-2 text-error font-bold text-2xl tabular-nums tracking-tight">
             <span className="text-error mr-1">🕒</span>
             <span>{h}</span>
             <span className="text-neutral-5 text-sm font-normal -mt-1 ml-0.5">h</span>
             <span className="animate-pulse opacity-50 mx-1">:</span>
             <span>{m}</span>
             <span className="text-neutral-5 text-sm font-normal -mt-1 ml-0.5">m</span>
             <span className="animate-pulse opacity-50 mx-1">:</span>
             <span>{s}</span>
             <span className="text-neutral-5 text-sm font-normal -mt-1 ml-0.5">s</span>
          </div>
       </div>
    </div>
  );
};

export const EmptyPreview = () => {
  const [loading, setLoading] = useState(false);

  const handleAction = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center p-12 bg-white rounded-xl shadow-sm border border-neutral-3 transition-all">
       <div className="relative w-24 h-24 mb-6">
         <motion.div 
            animate={{ 
              rotate: loading ? 360 : 0, 
              scale: loading ? 0.9 : 1
            }}
            transition={{ duration: 2, repeat: loading ? Infinity : 0, ease: "linear" }}
            className={`w-full h-full rounded-full flex items-center justify-center ${loading ? 'bg-brand/10 border-2 border-brand border-t-transparent' : 'bg-neutral-2'}`}
         >
           {!loading && <span className="text-4xl filter grayscale opacity-50">📂</span>}
         </motion.div>
       </div>
       <p className="text-neutral-12 font-bold mb-1">{loading ? '正在加载中...' : '暂无数据'}</p>
       <p className="text-sm text-neutral-7 mb-6 text-center max-w-[200px]">{loading ? '请稍候片刻，正在努力拉取最新数据' : '当前列表为空，去添加一些内容吧'}</p>
       
       <button 
         onClick={handleAction}
         disabled={loading}
         className={`px-6 py-2.5 text-sm font-bold rounded-lg shadow-md active:scale-95 transition-all flex items-center gap-2 ${loading ? 'bg-neutral-3 text-neutral-6 shadow-none cursor-not-allowed' : 'bg-brand text-white shadow-brand/20 hover:bg-brand-dark'}`}
       >
         {loading && <span className="w-3 h-3 rounded-full border-2 border-neutral-6 border-t-transparent animate-spin" />}
         {loading ? '加载中' : '尝试刷新'}
       </button>
    </div>
  );
};

export const GridPreview = () => {
  return (
    <div className="space-y-8 bg-neutral-2 p-6 rounded-2xl w-full max-w-sm mx-auto shadow-inner">
       <div className="grid grid-cols-4 gap-4 bg-white p-4 rounded-xl shadow-md border border-neutral-3 relative overflow-hidden">
          {/* Subtle shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none" />
          
          {[
            { icon: '⭐', color: 'text-warning', bg: 'bg-warning/10', label: '收藏', border: 'hover:border-warning/30 group-hover:shadow-warning/20' },
            { icon: '📍', color: 'text-brand', bg: 'bg-brand/10', label: '地点', border: 'hover:border-brand/30 group-hover:shadow-brand/20' },
            { icon: '🛒', color: 'text-success', bg: 'bg-success/10', label: '商城', border: 'hover:border-success/30 group-hover:shadow-success/20' },
            { icon: '⚙️', color: 'text-neutral-10', bg: 'bg-neutral-2', label: '设置', border: 'hover:border-neutral-4 group-hover:shadow-black/5' },
          ].map((item, i) => (
             <motion.div 
                key={i} 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2 cursor-pointer group"
             >
                <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center transition-all duration-300 border border-transparent ${item.border} shadow-sm relative overflow-hidden`}>
                   <span className={`text-xl ${item.color} relative z-10 drop-shadow-sm`}>{item.icon}</span>
                   <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors" />
                </div>
                <span className="text-xs text-neutral-8 font-bold group-hover:text-neutral-12 transition-colors">{item.label}</span>
             </motion.div>
          ))}
       </div>
    </div>
  );
};

export const SwiperPreview = () => {
  const [current, setCurrent] = useState(0);
  const slides = [
    { title: '春季特惠开启', tag: 'HOT EVENT', bg: 'from-brand/20 to-brand-dark/20', color: 'bg-brand' },
    { title: '新款上阵', tag: 'NEW ARRIVAL', bg: 'from-success/20 to-success-dark/20', color: 'bg-success' },
    { title: '限时秒杀', tag: 'FLASH SALE', bg: 'from-warning/20 to-error/20', color: 'bg-warning' },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-4 max-w-md mx-auto w-full">
       <div className="relative w-full aspect-[2/1] bg-neutral-2 rounded-xl overflow-hidden shadow-md group cursor-grab active:cursor-grabbing border border-neutral-3">
          <AnimatePresence mode="popLayout">
            <motion.div 
               key={current}
               initial={{ opacity: 0, x: 100 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -100 }}
               transition={{ type: "spring", stiffness: 300, damping: 30 }}
               className={`absolute inset-0 bg-gradient-to-r ${slides[current].bg} flex flex-col items-start justify-center p-8 text-neutral-12`}
            >
               <p className="text-[10px] font-black opacity-80 uppercase tracking-[0.3em] mb-2">{slides[current].tag}</p>
               <h2 className="text-2xl md:text-3xl font-black tracking-tight">{slides[current].title}</h2>
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

          <button 
             onClick={(e) => { e.stopPropagation(); setCurrent(c => (c - 1 + slides.length) % slides.length); }}
             className="absolute top-1/2 left-2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95 shadow-sm text-neutral-10 hover:text-brand z-10"
          >
             <ChevronRight size={18} className="rotate-180" />
          </button>
          <button 
             onClick={(e) => { e.stopPropagation(); setCurrent(c => (c + 1) % slides.length); }}
             className="absolute top-1/2 right-2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95 shadow-sm text-neutral-10 hover:text-brand z-10"
          >
             <ChevronRight size={18} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
             {slides.map((s, idx) => (
                <div 
                  key={idx} 
                  onClick={(e) => { e.stopPropagation(); setCurrent(idx); }}
                  className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 shadow-sm ${current === idx ? 'w-4 ' + s.color : 'w-1.5 bg-white/50 hover:bg-white/80'}`} 
                />
             ))}
          </div>
       </div>
    </div>
  );
};

// --- Feedback Components Previews ---

export const LoadingPreview = () => {
  const [loading, setLoading] = useState(false);
  const [localLoading, setLocalLoading] = useState(false);
  
  return (
    <div className="h-full flex flex-col items-center justify-center gap-10 py-10 relative bg-neutral-1 -mx-5 px-5">
       <button onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 3000); }} className="absolute top-4 right-4 text-xs font-bold bg-white border border-neutral-3 text-neutral-10 px-3 py-1.5 rounded-lg hover:border-brand hover:text-brand transition-colors shadow-sm">触发全屏加载</button>
       
       <AnimatePresence>
          {loading && (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-white/80 backdrop-blur-[2px] z-20 flex flex-col items-center justify-center gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center gap-4 border border-neutral-2">
                   <Loader2 size={36} className="text-brand animate-spin" />
                   <span className="text-sm font-bold text-neutral-10 tracking-widest">加载中...</span>
                </div>
             </motion.div>
          )}
       </AnimatePresence>
       
       {/* Local skeleton/loading area */}
       <div className="w-full max-w-sm bg-white p-5 rounded-2xl shadow-sm border border-neutral-3 relative overflow-hidden">
          <div className="flex justify-between items-center mb-4">
             <h4 className="font-bold text-sm text-neutral-12">局部数据区域</h4>
             <button onClick={() => { setLocalLoading(true); setTimeout(() => setLocalLoading(false), 2000); }} className="text-[12px] text-brand font-medium flex items-center gap-1 hover:opacity-80 transition-opacity"><RefreshCw size={12} className={localLoading ? 'animate-spin' : ''} /> 刷新</button>
          </div>
          
          <div className="space-y-4">
             <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 relative bg-neutral-2">
                   <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 space-y-2">
                   <div className="h-4 bg-neutral-2 w-1/2 rounded" />
                   <div className="h-3 bg-neutral-2 w-full rounded" />
                </div>
             </div>
          </div>
          
          {localLoading && (
             <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] flex items-center justify-center z-10 transition-all">
                <div className="w-8 h-8 border-3 border-brand border-t-transparent rounded-full animate-spin" />
             </div>
          )}
       </div>

       <div className="flex gap-10 opacity-70">
          <div className="flex flex-col items-center gap-3">
             <Loader2 size={24} className="text-neutral-8 animate-spin" />
             <span className="text-xs text-neutral-6 font-medium">常规指示器</span>
          </div>
          
          <div className="flex flex-col items-center gap-3">
             <div className="flex gap-1.5 items-center h-6">
                <div className="w-1.5 h-1.5 bg-neutral-8 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="w-1.5 h-1.5 bg-neutral-8 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="w-1.5 h-1.5 bg-neutral-8 rounded-full animate-bounce" />
             </div>
             <span className="text-xs text-neutral-6 font-medium">打点提示</span>
          </div>
       </div>
    </div>
  );
};

export const PopupPreview = () => {
  const [popupType, setPopupType] = useState<'center' | 'bottom' | null>(null);
  
  return (
    <div className="h-full flex flex-col relative bg-neutral-1 -mx-5 px-5 overflow-hidden">
       {/* 中心展示区 - 用于预览效果 */}
       <div className="flex-1 flex items-center justify-center relative">
          <AnimatePresence>
             {popupType && (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-20 flex flex-col justify-center items-center">
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" onClick={() => setPopupType(null)} />
                  
                  {popupType === 'center' && (
                    <motion.div 
                      key="center-popup"
                      initial={{ scale: 0.9, opacity: 0, y: 20 }} 
                      animate={{ scale: 1, opacity: 1, y: 0 }} 
                      exit={{ scale: 0.9, opacity: 0, y: 20 }} 
                      className="relative bg-white w-[85%] max-w-[320px] rounded-2xl shadow-2xl p-6 text-center"
                    >
                       <div className="w-12 h-12 bg-brand/10 text-brand rounded-full items-center justify-center flex mx-auto mb-4">
                          <AlertCircle size={24} />
                       </div>
                       <h3 className="text-lg font-bold mb-2 text-neutral-12">更新提醒</h3>
                       <p className="text-sm text-neutral-8 mb-6 leading-relaxed text-left border bg-neutral-1 p-3 rounded-xl">
                          检测到有新版本发布，包含多项性能优化与 Bug 修复，是否立即更新？
                       </p>
                       <div className="flex gap-3">
                          <button onClick={() => setPopupType(null)} className="flex-1 py-3 bg-neutral-2 text-neutral-11 rounded-full font-bold text-sm hover:bg-neutral-3 transition-colors">残忍拒绝</button>
                          <button onClick={() => setPopupType(null)} className="flex-1 py-3 bg-brand text-white rounded-full font-bold text-sm shadow-lg shadow-brand/20 hover:scale-105 transition-transform">立即更新</button>
                       </div>
                    </motion.div>
                  )}

                  {popupType === 'bottom' && (
                    <motion.div 
                      key="bottom-popup"
                      initial={{ opacity: 0, y: '100%' }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: '100%' }}
                      transition={{ type: "spring", damping: 25, stiffness: 300 }}
                      className="relative bg-white w-full rounded-t-3xl shadow-2xl p-6 pb-8 text-center mt-auto"
                    >
                       <div className="w-12 h-1.5 bg-neutral-3 rounded-full mx-auto mb-6" />
                       <h3 className="text-[16px] font-bold mb-6 text-neutral-12">选择操作</h3>
                       <div className="space-y-3">
                          <button onClick={() => setPopupType(null)} className="w-full py-3.5 bg-neutral-1 text-neutral-11 rounded-xl font-medium text-[15px] hover:bg-neutral-2 transition-colors flex items-center justify-center gap-2"><Settings2 size={18}/> 偏好设置</button>
                          <button onClick={() => setPopupType(null)} className="w-full py-3.5 bg-neutral-1 text-neutral-11 rounded-xl font-medium text-[15px] hover:bg-neutral-2 transition-colors flex items-center justify-center gap-2"><Info size={18}/> 关于应用</button>
                          <button onClick={() => setPopupType(null)} className="w-full py-3.5 bg-error/10 text-error rounded-xl font-bold text-[15px] hover:bg-error/20 transition-colors mt-2">退出登录</button>
                       </div>
                    </motion.div>
                  )}
               </motion.div>
             )}
          </AnimatePresence>

          {/* 背景装饰内容 */}
          <div className="w-full max-w-sm space-y-4 opacity-10 blur-[1px] pointer-events-none">
             <div className="h-32 bg-white rounded-2xl border border-neutral-3" />
             <div className="flex gap-4">
                <div className="w-16 h-16 bg-white rounded-full border border-neutral-3" />
                <div className="flex-1 space-y-2 py-2">
                   <div className="h-4 bg-neutral-2 w-1/2 rounded" />
                   <div className="h-3 bg-neutral-2 w-full rounded" />
                </div>
             </div>
             <div className="h-24 bg-white rounded-2xl border border-neutral-3" />
          </div>
       </div>

       {/* 底部按钮操作区 */}
       <div className="pb-8 pt-4 border-t border-neutral-2 bg-white/50 backdrop-blur-sm z-10">
          <div className="flex flex-col gap-2 max-w-[280px] mx-auto">
             <button onClick={() => setPopupType('center')} className="w-full py-3 bg-brand text-white rounded-xl shadow-md hover:bg-brand-dark transition-all active:scale-[0.98] font-bold text-sm">唤起中心弹出层</button>
             <button onClick={() => setPopupType('bottom')} className="w-full py-3 bg-white border border-neutral-3 text-neutral-11 rounded-xl shadow-sm hover:border-brand hover:text-brand transition-all active:scale-[0.98] font-bold text-sm">唤起底部弹出层</button>
          </div>
       </div>
    </div>
  );
};

export const ToastPreview = () => {
  const [toast, setToast] = useState<{ type: 'success' | 'warning' | 'text' | 'loading', show: boolean }>({ type: 'success', show: false });
  
  const showToast = (type: 'success' | 'warning' | 'text' | 'loading') => {
    setToast({ type, show: true });
    
    if (type === 'loading') {
       setTimeout(() => setToast({ type: 'success', show: true }), 2000);
       setTimeout(() => setToast(prev => ({ ...prev, show: false })), 4000);
    } else {
       setTimeout(() => setToast(prev => ({ ...prev, show: false })), 2000);
    }
  };
  
  return (
    <div className="h-full flex flex-col relative bg-neutral-1 -mx-5 px-5 overflow-hidden">
       {/* 中心展示区 */}
       <div className="flex-1 flex items-center justify-center relative">
          <AnimatePresence>
             {toast.show && (
                <motion.div 
                   key={toast.type} 
                   initial={{ opacity: 0, scale: 0.8, y: 20 }} 
                   animate={{ opacity: 1, scale: 1, y: 0 }} 
                   exit={{ opacity: 0, scale: 0.8, y: -20 }}
                   className="z-20 drop-shadow-2xl"
                >
                   {toast.type === 'success' && (
                     <div className="bg-neutral-10/95 backdrop-blur px-8 py-6 rounded-2xl flex flex-col items-center gap-2 w-32 shadow-2xl">
                       <CircleCheck size={36} className="text-white" />
                       <span className="text-white text-[15px] font-bold mt-1 tracking-wider">提交成功</span>
                     </div>
                   )}
                   {toast.type === 'warning' && (
                     <div className="bg-neutral-10/95 backdrop-blur px-6 py-3.5 rounded-full flex items-center gap-2.5 whitespace-nowrap shadow-2xl">
                       <CircleAlert size={18} className="text-warning" />
                       <span className="text-white text-sm font-medium">网络连接不稳定</span>
                     </div>
                   )}
                   {toast.type === 'loading' && (
                     <div className="bg-neutral-10/95 backdrop-blur px-8 py-6 rounded-2xl flex flex-col items-center gap-3 w-32 shadow-2xl">
                       <Loader2 size={32} className="text-white animate-spin" />
                       <span className="text-white text-[15px] font-bold mt-1 tracking-wider">处理中...</span>
                     </div>
                   )}
                   {toast.type === 'text' && (
                     <div className="bg-neutral-10/95 backdrop-blur px-6 py-3 rounded-full text-white text-sm font-medium whitespace-nowrap shadow-2xl">
                       操作已完成
                     </div>
                   )}
                </motion.div>
             )}
          </AnimatePresence>

          {/* 装饰用 背景图层 */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 pointer-events-none z-0 opacity-20 blur-[3px]">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-3 flex flex-col gap-3 w-48">
                 <div className="h-4 bg-neutral-2 w-3/4 rounded" />
                 <div className="h-3 bg-neutral-2 w-full rounded" />
                 <div className="h-3 bg-neutral-2 w-5/6 rounded" />
              </div>
          </div>
       </div>

       {/* 底部操作区 */}
       <div className="pb-8 pt-4 border-t border-neutral-2 bg-white/30 backdrop-blur-sm z-10">
          <div className="flex gap-2 flex-wrap justify-center max-w-[320px] mx-auto">
             <button onClick={() => showToast('success')} className="px-3 py-2 bg-success text-white rounded-lg hover:bg-success/90 transition-all active:scale-95 shadow-sm text-xs font-bold">成功提示</button>
             <button onClick={() => showToast('warning')} className="px-3 py-2 bg-warning text-white rounded-lg hover:bg-warning/90 transition-all active:scale-95 shadow-sm text-xs font-bold">警告提示</button>
             <button onClick={() => showToast('loading')} className="px-3 py-2 bg-brand text-white rounded-lg hover:bg-brand-dark transition-all active:scale-95 shadow-sm text-xs font-bold">加载提示</button>
             <button onClick={() => showToast('text')} className="px-3 py-2 bg-neutral-8 text-white rounded-lg hover:bg-neutral-9 transition-all active:scale-95 shadow-sm text-xs font-bold">普通文本</button>
          </div>
       </div>
    </div>
  );
};

export const DialogPreview = () => {
  const [dialogType, setDialogType] = useState<'destructive' | 'confirm' | null>(null);
  
  return (
    <div className="h-full flex flex-col gap-4 items-center justify-center p-4">
       <button onClick={() => setDialogType('confirm')} className="px-6 py-2.5 bg-brand text-white rounded-lg shadow-md hover:bg-brand-dark transition-colors font-medium w-48 text-sm">打开确认对话框</button>
       <button onClick={() => setDialogType('destructive')} className="px-6 py-2.5 bg-error text-white rounded-lg shadow-md hover:bg-red-600 transition-colors font-medium w-48 text-sm">打开破坏性操作对话框</button>
       
       <AnimatePresence>
          {dialogType && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-30 flex items-center justify-center p-4">
               <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" onClick={() => setDialogType(null)} />
               
               {dialogType === 'destructive' && (
                 <motion.div 
                   initial={{ scale: 0.95, opacity: 0 }} 
                   animate={{ scale: 1, opacity: 1 }} 
                   exit={{ scale: 0.95, opacity: 0 }} 
                   className="relative bg-white w-full max-w-[320px] rounded-2xl shadow-xl overflow-hidden flex flex-col"
                 >
                    <div className="p-6 text-center pt-8">
                       <h3 className="text-lg font-bold text-neutral-12 mb-3">删除确认</h3>
                       <p className="text-[14px] text-neutral-7 leading-relaxed">
                          确定要删除这篇草稿吗？删除后将无法恢复，请谨慎操作。
                       </p>
                    </div>
                    <div className="flex border-t border-neutral-2 bg-neutral-50/50 mt-2">
                       <button onClick={() => setDialogType(null)} className="flex-1 py-4 text-[15px] font-medium text-neutral-9 border-r border-neutral-2 hover:bg-neutral-2 transition-colors active:bg-neutral-3">取消</button>
                       <button onClick={() => setDialogType(null)} className="flex-1 py-4 text-[15px] font-bold text-error hover:bg-error/5 transition-colors active:bg-error/10">确定删除</button>
                    </div>
                 </motion.div>
               )}

               {dialogType === 'confirm' && (
                 <motion.div 
                   initial={{ scale: 0.95, opacity: 0 }} 
                   animate={{ scale: 1, opacity: 1 }} 
                   exit={{ scale: 0.95, opacity: 0 }} 
                   className="relative bg-white w-full max-w-[320px] rounded-2xl shadow-xl overflow-hidden flex flex-col"
                 >
                    <div className="p-6 text-center pt-8">
                       <h3 className="text-lg font-bold text-neutral-12 mb-3">保存修改</h3>
                       <p className="text-[14px] text-neutral-7 leading-relaxed">
                          您的个人信息已修改完毕，是否立即保存更新？
                       </p>
                    </div>
                    <div className="flex border-t border-neutral-2 bg-neutral-50/50 mt-2">
                       <button onClick={() => setDialogType(null)} className="flex-1 py-4 text-[15px] font-medium text-neutral-9 border-r border-neutral-2 hover:bg-neutral-2 transition-colors active:bg-neutral-3">稍后保存</button>
                       <button onClick={() => setDialogType(null)} className="flex-1 py-4 text-[15px] font-bold text-brand hover:bg-brand/5 transition-colors active:bg-brand/10">立即保存</button>
                    </div>
                 </motion.div>
               )}
            </motion.div>
          )}
       </AnimatePresence>
    </div>
  );
};

export const DropdownMenuPreview = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('综合排序');
  const options = ['综合排序', '最新上架', '价格最低', '距离最近'];
  
  return (
    <div className="h-full bg-neutral-1 -mx-5 px-5 py-4 relative flex flex-col pt-10">
       <div className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-sm border border-neutral-3 overflow-hidden flex flex-col h-[300px]">
          {/* Header/Nav bar mockup */}
          <div className="h-14 border-b border-neutral-2 flex items-center px-4 justify-between relative z-20 bg-white">
             <div className="flex gap-6 h-full relative">
                <div 
                   onClick={() => setOpen(!open)}
                   className="flex items-center h-full cursor-pointer hover:opacity-80 transition-opacity gap-1"
                >
                   <span className={`text-[14px] font-bold transition-colors ${open ? 'text-brand' : 'text-neutral-11'}`}>{selected}</span>
                   <ChevronDown size={16} className={`transition-transform duration-300 ${open ? 'rotate-180 text-brand' : 'text-neutral-6'}`} />
                </div>
                <div className="flex items-center h-full cursor-pointer opacity-50 gap-1">
                   <span className="text-[14px] font-medium text-neutral-11">全部品牌</span>
                   <ChevronDown size={16} className="text-neutral-6" />
                </div>
             </div>
             
             <AnimatePresence>
                {open && (
                   <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ type: "spring", damping: 25, stiffness: 300 }}
                      className="absolute top-14 left-0 right-0 bg-white shadow-[0_12px_24px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col z-20 rounded-b-xl"
                   >
                      {options.map((opt, i) => (
                         <div 
                            key={opt}
                            onClick={() => { setSelected(opt); setOpen(false); }}
                            className={`px-5 py-3.5 text-[14px] flex justify-between items-center cursor-pointer transition-colors hover:bg-neutral-1 ${selected === opt ? 'text-brand font-bold bg-brand/5' : 'text-neutral-10 border-t border-neutral-2'}`}
                         >
                            {opt}
                            {selected === opt && <Check size={18} className="text-brand" />}
                         </div>
                      ))}
                   </motion.div>
                )}
             </AnimatePresence>
          </div>
          
          {/* Content Mockup */}
          <div className="flex-1 bg-neutral-1 p-4 relative z-0">
             <div className="space-y-3">
                <div className="h-20 bg-white rounded-xl shadow-sm border border-neutral-2" />
                <div className="h-20 bg-white rounded-xl shadow-sm border border-neutral-2" />
             </div>
             
             {/* Backdrop */}
             <AnimatePresence>
                {open && (
                   <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      exit={{ opacity: 0 }} 
                      onClick={() => setOpen(false)}
                      className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-10" 
                   />
                )}
             </AnimatePresence>
          </div>
       </div>
    </div>
  );
};

export const MessagePreview = () => {
  const [messages, setMessages] = useState<{id: number, text: string, type: 'info'|'success'|'error'}[]>([]);
  let idCounter = React.useRef(0);

  const addMessage = (type: 'info' | 'success' | 'error', text: string) => {
    const id = idCounter.current++;
    setMessages(prev => [...prev, { id, text, type }]);
    setTimeout(() => {
      setMessages(prev => prev.filter(m => m.id !== id));
    }, 3500);
  };

  return (
    <div className="h-full flex flex-col relative overflow-hidden bg-neutral-1 -mx-5">
       {/* 模拟标题栏 */}
       <div className="absolute top-0 left-0 right-0 h-[56px] bg-white border-b border-neutral-2 flex items-center justify-center z-30 shadow-sm">
          <span className="font-bold text-[16px] text-neutral-12">消息通知演示</span>
       </div>
       
       <div className="flex-1 flex flex-col items-center justify-center gap-4 mt-10">
          <button onClick={() => addMessage('info', '这是一条普通的消息通知')} className="w-56 py-3 bg-white border border-neutral-3 text-neutral-11 rounded-xl hover:border-brand hover:text-brand transition-colors text-[14px] font-bold shadow-sm">触发提示消息</button>
          <button onClick={() => addMessage('success', '状态已自动保存成功')} className="w-56 py-3 bg-white border border-neutral-3 text-neutral-11 rounded-xl hover:border-success hover:text-success transition-colors text-[14px] font-bold shadow-sm">触发成功消息</button>
          <button onClick={() => addMessage('error', '操作失败，暂无权限')} className="w-56 py-3 bg-white border border-neutral-3 text-neutral-11 rounded-xl hover:border-error hover:text-error transition-colors text-[14px] font-bold shadow-sm">触发错误消息</button>
       </div>
       
       {/* 通知消息排队展示区 */}
       <div className="absolute top-[68px] w-full flex flex-col items-center gap-2.5 pointer-events-none z-20">
          <AnimatePresence>
             {messages.map((m) => (
               <motion.div 
                 key={m.id}
                 initial={{ opacity: 0, y: -20, scale: 0.9 }}
                 animate={{ opacity: 1, y: 0, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.9, y: -10 }}
                 layout
                 transition={{ type: 'spring', damping: 25, stiffness: 400 }}
                 className={`flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-[0_8px_16px_rgba(0,0,0,0.08)] text-[13px] font-bold tracking-wide w-[90%] max-w-[320px] ${
                   m.type === 'info' ? 'bg-white text-neutral-11 border border-neutral-2' : 
                   m.type === 'success' ? 'bg-success/10 text-success border border-success/20' : 
                   'bg-error/10 text-error border border-error/20'
                 }`}
               >
                 {m.type === 'info' && <Info size={18} className="text-brand shrink-0" />}
                 {m.type === 'success' && <CircleCheck size={18} className="shrink-0" />}
                 {m.type === 'error' && <AlertCircle size={18} className="shrink-0" />}
                 <span className="truncate">{m.text}</span>
               </motion.div>
             ))}
          </AnimatePresence>
       </div>
    </div>
  );
};

export const SwipeCellPreview = () => {
  const [swipedIndex, setSwipedIndex] = useState<number | null>(null);
  const [lists, setLists] = useState([
    { id: 1, title: '双11超级红包', desc: '点击领取您的专属福利', time: '10:00', unread: true },
    { id: 2, title: '系统通知', desc: '您的账号在异地登录，请确认是否本人操作，如有异常请尽快修改密码', time: '昨天', unread: false }
  ]);

  const handleDelete = (id: number) => {
     setLists(prev => prev.filter(item => item.id !== id));
     setSwipedIndex(null);
  };
  
  const handleRestore = () => {
     setLists([
       { id: 1, title: '双11超级红包', desc: '点击领取您的专属福利', time: '10:00', unread: true },
       { id: 2, title: '系统通知', desc: '您的账号在异地登录，请确认是否本人操作，如有异常请尽快修改密码', time: '昨天', unread: false }
     ]);
     setSwipedIndex(null);
  };

  return (
    <div className="h-full bg-neutral-2 -mx-5 px-5 py-4 overflow-hidden relative" onClick={() => setSwipedIndex(null)}>
       <div className="space-y-4">
          <p className="text-xs font-bold text-neutral-8 uppercase tracking-widest text-center flex items-center justify-center gap-2">- 在卡片上向左拖拽横划 <MoreHorizontal size={14} className="animate-pulse" /> -</p>
          
          <div className="bg-white rounded-xl divide-y divide-neutral-2 overflow-hidden shadow-sm border border-neutral-3">
             <AnimatePresence>
                {lists.length === 0 && (
                   <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 100 }} exit={{ opacity: 0, height: 0 }} className="flex flex-col items-center justify-center text-neutral-6 text-sm py-8 gap-2">
                      暂无通知内容
                      <button onClick={handleRestore} className="text-brand font-bold uppercase text-xs tracking-wider border border-brand/20 px-3 py-1 rounded-full mt-2 hover:bg-brand/5">恢复数据</button>
                   </motion.div>
                )}
                {lists.map((item, idx) => (
                   <motion.div 
                      key={item.id} 
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ opacity: { duration: 0.2 }, layout: { type: "spring", bounce: 0, duration: 0.4 } }}
                      className="relative overflow-hidden bg-neutral-1 group" 
                      onClick={(e) => { e.stopPropagation(); setSwipedIndex(swipedIndex === idx ? null : idx); }}
                   >
                      {/* Background Actions */}
                      <div className="absolute inset-y-0 right-0 flex">
                         <div className="w-[70px] bg-neutral-4 flex items-center justify-center text-white cursor-pointer hover:bg-neutral-5 transition-colors">
                            <span className="text-sm font-bold">已读</span>
                         </div>
                         <div 
                            className="w-[70px] bg-error flex items-center justify-center text-white cursor-pointer hover:bg-red-600 transition-colors"
                            onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}
                         >
                            <span className="text-sm font-bold">删除</span>
                         </div>
                      </div>
                      
                      {/* Foreground Cell */}
                      <motion.div 
                         className="relative bg-white px-4 py-4 cursor-grab active:cursor-grabbing"
                         initial={false}
                         animate={{ x: swipedIndex === idx ? -140 : 0 }}
                         transition={{ type: "spring", stiffness: 400, damping: 30 }}
                         drag="x"
                         dragConstraints={{ left: -140, right: 0 }}
                         dragElastic={0.1}
                         onDragEnd={(e, info) => {
                            if (info.offset.x < -40) setSwipedIndex(idx);
                            else setSwipedIndex(null);
                         }}
                      >
                         <div className="flex">
                            <div className="w-12 h-12 rounded-full bg-neutral-2 text-neutral-6 border border-neutral-3 flex items-center justify-center mr-4 relative shrink-0">
                               <Bell size={20} />
                               {item.unread && <div className="absolute top-0 right-0 w-3.5 h-3.5 border-[3px] border-white bg-error rounded-full" />}
                            </div>
                            <div className="flex-1 min-w-0 flex flex-col justify-center">
                               <div className="flex justify-between items-center mb-1">
                                  <h4 className="text-[15px] font-bold text-neutral-12 truncate pr-2">{item.title}</h4>
                                  <span className="text-[11px] text-neutral-5 font-medium shrink-0">{item.time}</span>
                               </div>
                               <p className="text-[13px] text-neutral-7 truncate">{item.desc}</p>
                            </div>
                         </div>
                      </motion.div>
                   </motion.div>
                ))}
             </AnimatePresence>
          </div>
       </div>
    </div>
  );
};
function CheckSquare(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={props.strokeWidth || 2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}

