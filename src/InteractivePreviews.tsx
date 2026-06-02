import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, Search as SearchIcon, X, CircleAlert, Plus, Check, RefreshCw, Loader2, CircleCheck, AlertCircle, Info, Bell, Trash2, ChevronDown, Settings2, Settings, MoreHorizontal, Layout as LayoutIcon, Image as ImageIcon, Image, Upload, Eye, MessageSquare, Clock, Timer, Edit, Sparkles, Zap, User, Home, Briefcase, FileText, Star, StarHalf, LogOut, Menu, ShoppingCart, Compass, Heart, CreditCard, Camera, File, ArrowUp, ArrowDown, Calculator, Box, LineChart, Download, Link, Globe, Car, Circle, Shield, ShieldCheck, Wifi, Battery, Smartphone, Maximize, Maximize2, GripVertical, MousePointer2, Layers, ArrowRight, Activity, Target, Eraser, Edit3, ThumbsUp, Mic, ShieldAlert, Moon, Volume2, Fingerprint, SunMedium } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';

export const TagPreview = () => {
  const [tags, setTags] = useState(['独家', '限时', '热卖', '新品']);
  const [inputValue, setInputValue] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = () => {
    if (inputValue.trim() && !tags.includes(inputValue.trim())) {
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
      setIsAdding(false);
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="space-y-10">
       <div className="space-y-4">
          <h4 className="text-[12px] text-neutral-8 font-bold uppercase tracking-wider">01. 基础状态 (Static)</h4>
          <div className="flex flex-wrap gap-3">
             <div className="px-3 py-1 bg-brand-light text-brand text-xs font-bold g-radius-inner shadow-sm border border-brand/10">稳定版</div>
             <div className="px-3 py-1 bg-success/10 text-success text-xs font-bold g-radius-inner shadow-sm border border-success/20">已完成</div>
             <div className="px-3 py-1 bg-warning/10 text-warning text-xs font-bold g-radius-inner shadow-sm border-warning/20">进行中</div>
             <div className="px-3 py-1 bg-error/10 text-error text-xs font-bold g-radius-inner shadow-sm border-error/20">已关闭</div>
          </div>
       </div>

       <div className="space-y-4">
          <h4 className="text-[12px] text-neutral-8 font-bold uppercase tracking-wider">02. 动态标签 (Removable)</h4>
          <div className="flex flex-wrap gap-2.5 p-4 bg-neutral-1 g-radius-card border border-neutral-3 shadow-sm min-h-[100px]">
             <AnimatePresence mode="popLayout">
                {tags.map((tag) => (
                  <motion.div
                    key={tag}
                    layout
                    initial={{ opacity: 0, scale: 0.8, x: -10 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                    className="group px-3 py-1.5 bg-neutral-2 text-neutral-11 text-xs font-bold g-radius flex items-center gap-2 border border-neutral-3 shadow-sm hover:border-brand/30 hover:bg-neutral-3 transition-all cursor-default"
                  >
                    {tag}
                    <button 
                      onClick={() => removeTag(tag)}
                      className="text-neutral-4 hover:text-error transition-colors p-0.5 rounded-full hover:bg-error/5"
                    >
                      <X size={12} />
                    </button>
                  </motion.div>
                ))}
             </AnimatePresence>

             {isAdding ? (
               <motion.div 
                 initial={{ width: 0, opacity: 0 }}
                 animate={{ width: 'auto', opacity: 1 }}
                 className="flex items-center"
               >
                 <input 
                   autoFocus
                   type="text"
                   value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}
                   onBlur={handleAdd}
                   onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                   placeholder="输入标签"
                   className="w-24 h-[30px] px-2 text-xs bg-neutral-0 border border-brand g-radius outline-none shadow-[0_0_0_2px_rgba(var(--brand-rgb,52,123,255),0.1)]"
                 />
               </motion.div>
             ) : (
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={() => setIsAdding(true)}
                 className="h-[30px] px-3 border border-neutral-4 border-dashed g-radius text-neutral-6 text-xs font-bold hover:border-brand hover:text-brand flex items-center gap-1.5 transition-all"
               >
                 <Plus size={14} />
                 添加
               </motion.button>
             )}
          </div>
       </div>

       <div className="space-y-4">
          <h4 className="text-[12px] text-neutral-8 font-bold uppercase tracking-wider">03. 圆形与描边 (Variant)</h4>
          <div className="flex flex-wrap gap-4">
             <div className="px-4 py-1.5 border border-brand text-brand text-xs font-bold rounded-full hover:bg-brand/5 transition-colors cursor-pointer">
               品牌核心
             </div>
             <div className="px-4 py-1.5 border border-neutral-4 text-neutral-8 text-xs font-bold rounded-full hover:border-neutral-8 hover:text-neutral-10 transition-colors cursor-pointer">
               辅助信息
             </div>
             <div className="flex items-center gap-2 px-3 py-1.5 bg-neutral-12 text-white text-xs font-bold g-radius">
               <CheckCircle size={14} />
               认证企业
             </div>
          </div>
       </div>
    </div>
  );
};

export const CalendarPreview = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 3, 1));
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2026, 3, 22));
  const [mode, setMode] = useState<'date' | 'month' | 'year'>('date');

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
  const handlePrevYear = () => setCurrentDate(new Date(year - 1, month, 1));
  const handleNextYear = () => setCurrentDate(new Date(year + 1, month, 1));
  
  const handleDecadePrev = () => setCurrentDate(new Date(year - 10, month, 1));
  const handleDecadeNext = () => setCurrentDate(new Date(year + 10, month, 1));

  const isSameDate = (d1: Date, d2: Date) => 
    d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();

  const calendarDays = [];
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      calendarDays.push({ date: new Date(year, month - 1, daysInPrevMonth - i), isCurrentMonth: false });
  }
  for (let i = 1; i <= daysInMonth; i++) {
      calendarDays.push({ date: new Date(year, month, i), isCurrentMonth: true });
  }
  const daysToFill = 42 - calendarDays.length;
  for (let i = 1; i <= daysToFill; i++) {
      calendarDays.push({ date: new Date(year, month + 1, i), isCurrentMonth: false });
  }

  const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

  return (
    <div className="bg-neutral-0 dark:bg-neutral-2 g-radius-card shadow-sm border border-neutral-3 p-4 space-y-4">
       {/* Header */}
       <div className="flex justify-between items-center text-[15px] font-bold">
          <div className="flex gap-2">
             {mode === 'date' && (
                <>
                  <div className="cursor-pointer hover:text-brand transition-colors p-1" onClick={handlePrevYear}>
                     <ChevronRight className="rotate-180" size={16} strokeWidth={3} />
                  </div>
                  <div className="cursor-pointer hover:text-brand transition-colors p-1" onClick={handlePrevMonth}>
                     <ChevronRight className="rotate-180" size={16} />
                  </div>
                </>
             )}
             {(mode === 'month' || mode === 'year') && (
                <div className="cursor-pointer hover:text-brand transition-colors p-1" onClick={mode === 'month' ? handlePrevYear : handleDecadePrev}>
                   <ChevronRight className="rotate-180" size={16} />
                </div>
             )}
          </div>
          
          <span 
             className="text-neutral-10 cursor-pointer hover:text-brand transition-colors select-none" 
             onClick={() => {
                if (mode === 'date') setMode('month');
                else if (mode === 'month') setMode('year');
             }}
          >
             {mode === 'date' ? `${year}年 ${month + 1}月` : mode === 'month' ? `${year}年` : `${year - 4} - ${year + 7}`}
          </span>
          
          <div className="flex gap-2">
             {(mode === 'month' || mode === 'year') && (
                <div className="cursor-pointer hover:text-brand transition-colors p-1" onClick={mode === 'month' ? handleNextYear : handleDecadeNext}>
                   <ChevronRight size={16} />
                </div>
             )}
             {mode === 'date' && (
                <>
                  <div className="cursor-pointer hover:text-brand transition-colors p-1" onClick={handleNextMonth}>
                     <ChevronRight size={16} />
                  </div>
                  <div className="cursor-pointer hover:text-brand transition-colors p-1" onClick={handleNextYear}>
                     <ChevronRight size={16} strokeWidth={3} />
                  </div>
                </>
             )}
          </div>
       </div>

       {/* Calendar Body */}
       <div className="relative">
          {mode === 'date' && (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-7 gap-y-2 gap-x-1 text-center text-[12px]">
                {['日','一','二','三','四','五','六'].map(d=><div key={d} className="text-neutral-6 font-bold pb-2">{d}</div>)}
                {calendarDays.map((day, i) => {
                   const active = isSameDate(day.date, selectedDate);
                   return (
                     <div 
                       key={i} 
                       onClick={() => {
                         setSelectedDate(day.date);
                         setCurrentDate(new Date(day.date.getFullYear(), day.date.getMonth(), 1));
                       }}
                       className={`h-9 w-9 mx-auto flex items-center justify-center rounded-full cursor-pointer transition-all active:scale-95 ${
                         active ? 'bg-brand text-white font-bold shadow-md shadow-brand/30' : 
                         day.isCurrentMonth ? 'text-neutral-11 hover:bg-neutral-2' : 'text-neutral-4 hover:bg-neutral-1'
                       }`}
                     >
                       {day.date.getDate()}
                     </div>
                   )
                })}
             </motion.div>
          )}

          {mode === 'month' && (
             <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="grid grid-cols-3 gap-3">
                {months.map((m, i) => {
                   const isActive = month === i;
                   return (
                      <div 
                         key={m}
                         onClick={() => {
                            setCurrentDate(new Date(year, i, 1));
                            setMode('date');
                         }}
                         className={`h-12 flex items-center justify-center rounded-xl cursor-pointer transition-all active:scale-95 text-[14px] ${
                            isActive ? 'bg-brand text-white font-bold shadow-md shadow-brand/30' : 'text-neutral-10 hover:bg-neutral-2 bg-neutral-1'
                         }`}
                      >
                         {m}
                      </div>
                   )
                })}
             </motion.div>
          )}

          {mode === 'year' && (
             <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="grid grid-cols-3 gap-3">
                {Array.from({length: 12}).map((_, i) => {
                   const y = year - 4 + i;
                   const isActive = year === y;
                   return (
                      <div 
                         key={y}
                         onClick={() => {
                            setCurrentDate(new Date(y, month, 1));
                            setMode('month');
                         }}
                         className={`h-12 flex items-center justify-center rounded-xl cursor-pointer transition-all active:scale-95 text-[14px] ${
                            isActive ? 'bg-brand text-white font-bold shadow-md shadow-brand/30' : 'text-neutral-10 hover:bg-neutral-2 bg-neutral-1'
                         }`}
                      >
                         {y}
                      </div>
                   )
                })}
             </motion.div>
          )}
       </div>
    </div>
  );
};

// --- Interactive WheelPicker Component (Gesture Based) ---
const WheelPicker = ({ 
  options, 
  value, 
  onChange,
  className = ""
}: { 
  options: string[] | number[]; 
  value: string | number; 
  onChange: (val: any) => void;
  className?: string;
}) => {
  const itemHeight = 44;
  const visibleItems = 5;
  const centerIndex = (options as any[]).indexOf(value);
  
  const y = useMemo(() => -centerIndex * itemHeight, [centerIndex, itemHeight]);

  const handleDragEnd = (event: any, info: any) => {
    // Determine the distance dragged
    const deltaY = info.offset.y;
    // Estimate how many items that distance represents
    const dragIndexOffset = -Math.round(deltaY / itemHeight);
    let newIndex = centerIndex + dragIndexOffset;
    
    newIndex = Math.max(0, Math.min(options.length - 1, newIndex));
    
    if (newIndex !== centerIndex) {
      onChange(options[newIndex]);
    }
  };

  const handleItemClick = (idx: number) => {
    if (idx !== centerIndex) {
      onChange(options[idx]);
    }
  };

  return (
    <div className={`relative h-[220px] w-full overflow-hidden bg-neutral-0 dark:bg-neutral-2 select-none ${className}`}>
       {/* Selection Indicator Overlay */}
       <div className="absolute top-1/2 left-0 w-full h-[44px] -translate-y-1/2 border-y border-neutral-3 bg-brand/5 pointer-events-none z-10" />
       
       <motion.div 
         drag="y"
         dragConstraints={{ top: -(options.length - 1) * itemHeight, bottom: 0 }}
         dragElastic={0.15}
         dragMomentum={false}
         onDragEnd={handleDragEnd}
         animate={{ y: -centerIndex * itemHeight }}
         transition={{ type: 'spring', stiffness: 350, damping: 35 }}
         className="w-full cursor-grab active:cursor-grabbing pb-[88px]"
         style={{ paddingTop: '88px' }}
       >
          {options.map((opt, idx) => {
            const isSelected = value === opt;
            const distance = Math.abs(idx - centerIndex);
            const opacity = distance === 0 ? 1 : Math.max(0, 0.8 - distance * 0.25);
            const rotateX = (idx - centerIndex) * 20;
            const MathScale = 1 - Math.min(0.2, distance * 0.05);

            return (
              <div 
                key={opt}
                onClick={() => handleItemClick(idx)}
                className={`h-[44px] w-full px-4 flex items-center justify-center transition-all duration-300 ${
                  isSelected ? 'text-brand font-black text-xl' : 'text-neutral-6 font-medium text-base'
                }`}
                style={{
                  opacity,
                  transform: `perspective(800px) rotateX(${rotateX}deg) scale(${MathScale})`,
                  transformOrigin: '50% 50%'
                }}
              >
                <span className="truncate max-w-full text-center leading-none mt-0.5">{opt}</span>
              </div>
            );
          })}
       </motion.div>

       {/* Top & Bottom Shades */}
       <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-white to-transparent pointer-events-none z-20" />
       <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
    </div>
  );
};

export const DateTimePickerPreview = () => {
  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));
  
  const [h, setH] = useState('11');
  const [m, setM] = useState('30');

  return (
    <div className="bg-neutral-0 dark:bg-neutral-2 g-radius-card shadow-sm border border-neutral-3 overflow-hidden animate-fade-in group">
       <div className="flex justify-between items-center px-4 py-3.5 border-b border-neutral-2 bg-neutral-1/50">
          <span className="text-[13px] text-neutral-6 font-medium cursor-pointer hover:text-neutral-8 transition-colors">取消</span>
          <div className="flex flex-col items-center">
             <span className="text-[15px] font-bold text-neutral-12">选择时间</span>
             <span className="text-[10px] text-brand font-bold uppercase tracking-widest mt-0.5">Time Picker</span>
          </div>
          <span className="text-[13px] font-bold text-brand cursor-pointer hover:opacity-70 transition-opacity">确定</span>
       </div>
       
       <div className="flex relative items-center justify-center bg-neutral-0 dark:bg-neutral-2 h-[220px]">
          <div className="absolute left-0 right-0 h-[44px] top-1/2 -translate-y-1/2 bg-brand/5 pointer-events-none z-10 border-y border-brand/20 shadow-sm" />
          
          <div className="flex-1 min-w-0 h-full border-r border-neutral-2">
             <WheelPicker 
               options={hours} 
               value={h} 
               onChange={setH}
             />
          </div>
          <div className="flex-1 min-w-0 h-full">
             <WheelPicker 
               options={minutes} 
               value={m} 
               onChange={setM}
             />
          </div>
       </div>

       <div className="p-4 bg-neutral-1 border-t border-neutral-2">
          <div className="flex items-center gap-2 justify-center">
             <div className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
             <span className="text-[14px] font-black text-neutral-11 tracking-wider">
                {h}:{m}
             </span>
          </div>
       </div>
    </div>
  );
};

export const CascaderPreview = () => {
  const provinces = ['广东省', '浙江省', '江苏省', '福建省', '四川省'];
  const cities: Record<string, string[]> = {
    '广东省': ['深圳市', '广州市', '珠海市', '东莞市'],
    '浙江省': ['杭州市', '宁波市', '温州市', '嘉兴市'],
    '江苏省': ['南京市', '苏州市', '无锡市', '常州市'],
    '福建省': ['福州市', '厦门市', '泉州市'],
    '四川省': ['成都市', '绵阳市', '乐山市']
  };
  const districts: Record<string, string[]> = {
    '深圳市': ['南山区', '福田区', '宝安区', '龙岗区'],
    '广州市': ['天河区', '越秀区', '海珠区', '白云区'],
    '杭州市': ['西湖区', '上城区', '余杭区', '萧山区'],
    '南京市': ['玄武区', '秦淮区', '建邺区', '鼓楼区'],
    '成都市': ['武侯区', '青羊区', '锦江区', '成华区']
  };

  const [province, setProvince] = useState(provinces[0]);
  const [city, setCity] = useState(cities[provinces[0]][0]);
  const [district, setDistrict] = useState(districts[cities[provinces[0]][0]][0]);

  // Sync cities when province changes
  useEffect(() => {
    const availableCities = cities[province] || [];
    if (!availableCities.includes(city)) {
      setCity(availableCities[0]);
    }
  }, [province]);

  // Sync districts when city changes
  useEffect(() => {
    const availableDistricts = districts[city] || ['其他'];
    if (!availableDistricts.includes(district)) {
      setDistrict(availableDistricts[0]);
    }
  }, [city]);

  return (
    <div className="bg-neutral-0 dark:bg-neutral-2 g-radius-card shadow-sm border border-neutral-3 overflow-hidden animate-fade-in group">
       <div className="flex justify-between items-center px-4 py-3.5 border-b border-neutral-2 bg-neutral-1/50">
          <span className="text-[13px] text-neutral-6 font-medium cursor-pointer hover:text-neutral-8 transition-colors">取消</span>
          <div className="flex flex-col items-center">
             <span className="text-[15px] font-bold text-neutral-12">选择地区</span>
             <span className="text-[10px] text-brand font-bold uppercase tracking-widest mt-0.5">Location Hub</span>
          </div>
          <span className="text-[13px] font-bold text-brand cursor-pointer hover:opacity-70 transition-opacity">确定</span>
       </div>
       
       <div className="flex relative items-center justify-center bg-neutral-0 dark:bg-neutral-2 h-[220px]">
          <div className="absolute left-0 right-0 h-[44px] top-1/2 -translate-y-1/2 bg-brand/5 pointer-events-none z-10 border-y border-brand/20 shadow-sm" />
          
          <div className="flex-1 min-w-0 h-full border-r border-neutral-2">
             <WheelPicker 
               options={provinces} 
               value={province} 
               onChange={setProvince}
             />
          </div>
          <div className="flex-1 min-w-0 h-full border-r border-neutral-2">
             <WheelPicker 
               options={cities[province] || []} 
               value={city} 
               onChange={setCity}
             />
          </div>
          <div className="flex-1 min-w-0 h-full">
             <WheelPicker 
               options={districts[city] || ['其他']} 
               value={district} 
               onChange={setDistrict}
             />
          </div>
       </div>

       <div className="p-4 bg-neutral-1 border-t border-neutral-2">
          <div className="flex items-center gap-2 justify-center">
             <div className="w-1.5 h-1.5 bg-brand rounded-full animate-bounce" />
             <span className="text-[11px] font-bold text-neutral-11">
                {province} / {city} / {district}
             </span>
          </div>
       </div>
    </div>
  );
};

// --- End of Picker Components ---

export const FormPreview = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  
  return (
    <div className="bg-neutral-0 dark:bg-neutral-2 g-radius-card shadow-sm border border-neutral-3 divide-y divide-neutral-2 overflow-hidden">
       <div className="px-5 py-4 flex items-center justify-between group focus-within:bg-brand/5 transition-colors">
          <span className="text-[14px] text-neutral-11 font-medium w-20">姓名</span>
          <input 
            type="text" 
            placeholder="请输入姓名" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-right text-[14px] outline-none flex-1 bg-transparent text-neutral-12 placeholder:text-neutral-6 font-medium" 
          />
       </div>
       <div className="px-5 py-4 flex items-center justify-between group focus-within:bg-brand/5 transition-colors">
          <span className="text-[14px] text-neutral-11 font-medium w-20">手机号</span>
          <input 
            type="tel" 
            placeholder="请输入手机号" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="text-right text-[14px] outline-none flex-1 bg-transparent text-neutral-12 placeholder:text-neutral-6 font-medium" 
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
               <span className="text-neutral-6">请选择</span>
             )}
             <ChevronRight size={16} className="text-neutral-4 group-hover:text-brand transition-colors"/>
          </div>
       </div>
    </div>
  );
};

export const PickerPreview = () => {
  const options = ['视觉设计', '交互开发', '产品经理', '测试工程师', '运营专家', '全栈开发', '数据分析'];
  const [selected, setSelected] = useState('交互开发');

  return (
    <div className="bg-neutral-0 dark:bg-neutral-2 g-radius-card shadow-sm border border-neutral-3 overflow-hidden animate-fade-in group">
       <div className="flex justify-between items-center px-4 py-3.5 border-b border-neutral-2">
          <span className="text-[13px] text-neutral-6 font-medium">取消</span>
          <span className="text-[15px] font-bold text-neutral-12">职业选择</span>
          <span className="text-[13px] font-bold text-brand group-hover:scale-105 transition-transform">确定</span>
       </div>
       <div className="px-4">
          <WheelPicker 
            options={options} 
            value={selected} 
            onChange={setSelected} 
          />
       </div>
       <div className="p-4 bg-neutral-1 border-t border-neutral-2 flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
          <span className="text-[11px] font-bold text-neutral-8">当前选中：{selected}</span>
       </div>
    </div>
  );
};

export const SearchPreview = () => {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('按钮');
  
  return (
    <div className="space-y-5">
       <div className={`bg-neutral-2 g-radius px-4 py-2.5 flex items-center gap-2 border transition-all ${val1 ? 'border-brand/30 bg-brand/5' : 'border-transparent focus-within:border-brand/40 focus-within:bg-neutral-0 dark:within:bg-neutral-2'}`}>
          <SearchIcon size={18} className={val1 ? 'text-brand' : 'text-neutral-6'} />
          <input 
            type="text" 
            placeholder="搜索组件名称" 
            value={val1}
            onChange={(e) => setVal1(e.target.value)}
            className="bg-transparent outline-none text-[14px] flex-1 font-medium text-neutral-12 placeholder:text-neutral-6 placeholder:font-normal" 
          />
          {val1 && (
            <div onClick={() => setVal1('')} className="bg-neutral-4 hover:bg-neutral-5 text-white rounded-full p-0.5 cursor-pointer transition-colors"><X size={12} strokeWidth={3} /></div>
          )}
       </div>
       
       <div className="bg-neutral-0 dark:bg-neutral-2 border border-brand ring-4 ring-brand/10 g-radius px-4 py-2.5 flex items-center gap-2 shadow-sm">
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
    <div className="flex items-center gap-6 p-6 bg-neutral-0 dark:bg-neutral-2 rounded-xl border border-neutral-3 shadow-sm justify-center">
       <div className="flex items-center bg-neutral-2 rounded-lg p-1 border border-neutral-3/50 shadow-inner">
          <button 
            onClick={() => setCount(Math.max(0, count - 1))}
            className="w-10 h-10 flex items-center justify-center text-neutral-7 hover:text-neutral-11 bg-neutral-0 dark:bg-neutral-2 rounded-md shadow-sm border border-neutral-2 active:scale-95 transition-all text-xl"
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
            className="w-10 h-10 flex items-center justify-center text-neutral-7 hover:text-brand bg-neutral-0 dark:bg-neutral-2 rounded-md shadow-sm border border-neutral-2 active:scale-95 transition-all text-xl"
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
    <div className={`bg-neutral-0 dark:bg-neutral-2 g-radius-card border p-4 shadow-sm transition-colors ${text.length > 0 ? 'border-brand/40 shadow-brand/5' : 'border-neutral-3 focus-within:border-brand focus-within:shadow-md'}`}>
       <textarea 
         rows={4} 
         placeholder="请输入您的宝贵意见..." 
         value={text}
         onChange={(e) => setText(e.target.value.substring(0, maxLength))}
         className="w-full text-[14px] outline-none resize-none bg-transparent text-neutral-12 placeholder:text-neutral-6 leading-relaxed font-medium" 
       />
       <div className="flex items-center justify-between mt-2">
          {text.length > 0 ? (
            <span className="text-[12px] text-brand font-medium">输入中...</span>
          ) : (
            <span className="text-[12px] text-transparent">_</span>
          )}
          <div className="text-right text-[12px] text-neutral-6 font-mono font-medium bg-neutral-1 px-2 py-0.5 rounded-full border border-neutral-2">
            <span className={text.length >= maxLength ? 'text-error' : text.length > 0 ? 'text-brand' : ''}>{text.length}</span> 
            <span className="mx-0.5">/</span> {maxLength}
          </div>
       </div>
    </div>
  );
};

export const UploadPreview = () => {
  const [activeTab, setActiveTab] = useState<'image' | 'idcard'>('image');

  // State for Images
  const [files, setFiles] = useState<any[]>([
    { id: '1', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=200&fit=crop', status: 'done', progress: 100 },
  ]);

  // State for Documents
  const [docFiles, setDocFiles] = useState<any[]>([
    { id: 'd1', name: '产品需求说明书.pdf', size: '2.4MB', status: 'done', progress: 100 }
  ]);

  // State for ID Cards
  const [idFront, setIdFront] = useState<{status: string, url?: string, progress?: number} | null>(null);
  const [idBack, setIdBack] = useState<{status: string, url?: string, progress?: number} | null>(null);

  const handleUploadImage = () => {
    const newId = Math.random().toString(36).substring(7);
    const newFile = { id: newId, status: 'uploading', progress: 0 };
    setFiles(prev => [...prev, newFile]);

    let p = 0;
    const interval = setInterval(() => {
      p += Math.floor(Math.random() * 20) + 5;
      if (p >= 100) {
        clearInterval(interval);
        setFiles(prev => prev.map(f => f.id === newId ? { 
          ...f, 
          status: 'done', 
          progress: 100,
          url: `https://images.unsplash.com/photo-${1600000000000 + Math.floor(Math.random() * 1000000)}?w=200&h=200&fit=crop`
        } : f));
      } else {
        setFiles(prev => prev.map(f => f.id === newId ? { ...f, progress: p } : f));
      }
    }, 400);
  };

  const handleUploadDoc = () => {
    const newId = Math.random().toString(36).substring(7);
    setDocFiles(prev => [...prev, { id: newId, name: `新建文档_${newId.substring(0,4)}.pdf`, size: '0.0MB', status: 'uploading', progress: 0 }]);
    let p = 0;
    const interval = setInterval(() => {
      p += 15;
      if (p >= 100) {
        clearInterval(interval);
        setDocFiles(prev => prev.map(f => f.id === newId ? { ...f, size: `${(Math.random()*5 + 1).toFixed(1)}MB`, status: 'done', progress: 100 } : f));
      } else {
        setDocFiles(prev => prev.map(f => f.id === newId ? { ...f, progress: p } : f));
      }
    }, 200);
  };

  const handleUploadId = (side: 'front' | 'back') => {
    const setFn = side === 'front' ? setIdFront : setIdBack;
    setFn({ status: 'uploading', progress: 0 });
    let p = 0;
    const interval = setInterval(() => {
      p += 12;
      if (p >= 100) {
        clearInterval(interval);
        const url = side === 'front' 
          ? 'https://images.unsplash.com/photo-1620815141040-cb64c76767cb?w=400&h=250&fit=crop'
          : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=250&fit=crop';
        setFn({ status: 'done', progress: 100, url });
      } else {
        setFn({ status: 'uploading', progress: p });
      }
    }, 150);
  };

  const removeFile = (id: string, type: 'image' | 'doc' = 'image') => {
    if (type === 'image') setFiles(prev => prev.filter(f => f.id !== id));
    else setDocFiles(prev => prev.filter(f => f.id !== id));
  };
  
  const removeIdDoc = (side: 'front' | 'back', e: React.MouseEvent) => {
    e.stopPropagation();
    if (side === 'front') setIdFront(null);
    else setIdBack(null);
  };

  return (
    <div className="space-y-6">
       <div className="flex bg-neutral-2 p-1 rounded-xl w-max">
          <button onClick={() => setActiveTab('image')} className={`px-4 py-1.5 rounded-lg text-[13px] font-bold transition-all ${activeTab === 'image' ? 'bg-neutral-0 dark:bg-neutral-2 text-neutral-12 shadow-sm' : 'text-neutral-6 hover:text-neutral-9'}`}>图片</button>
          <button onClick={() => setActiveTab('idcard')} className={`px-4 py-1.5 rounded-lg text-[13px] font-bold transition-all ${activeTab === 'idcard' ? 'bg-neutral-0 dark:bg-neutral-2 text-neutral-12 shadow-sm' : 'text-neutral-6 hover:text-neutral-9'}`}>证件上传</button>
       </div>

       {activeTab === 'image' && (
         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
           <div className="flex flex-wrap gap-4">
              <AnimatePresence mode="popLayout">
                {files.map((file) => (
                  <motion.div
                    key={file.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                    className="relative w-24 h-24 group rounded-2xl overflow-hidden border border-neutral-3 bg-neutral-1 shadow-sm"
                  >
                    {file.status === 'done' ? (
                      <>
                        <img 
                          src={file.url} 
                          alt="uploaded" 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                           <button className="p-1.5 bg-white/20 hover:bg-white/40 rounded-lg text-white transition-all hover:scale-110">
                              <Eye size={16} />
                           </button>
                           <button 
                             onClick={() => removeFile(file.id, 'image')}
                             className="p-1.5 bg-error/80 hover:bg-error rounded-lg text-white transition-all hover:scale-110"
                           >
                              <Trash2 size={16} />
                           </button>
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-3 relative">
                         <div className="absolute inset-0 bg-brand/5 animate-pulse" />
                         <Loader2 size={20} className="text-brand animate-spin mb-2 relative z-10" />
                         <div className="w-full h-1 bg-neutral-3 rounded-full overflow-hidden relative z-10">
                            <motion.div 
                              className="h-full bg-brand"
                              initial={{ width: 0 }}
                              animate={{ width: `${file.progress}%` }}
                            />
                         </div>
                         <span className="text-[10px] font-bold text-brand mt-2 relative z-10">{file.progress}%</span>
                         <button 
                             onClick={() => removeFile(file.id, 'image')}
                             className="absolute top-1 right-1 p-0.5 bg-neutral-4/50 rounded-full text-white hover:bg-error"
                         >
                            <X size={10} />
                         </button>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
    
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleUploadImage}
                className="w-24 h-24 rounded-2xl border-2 border-dashed border-neutral-4 bg-neutral-1/50 flex flex-col items-center justify-center text-neutral-6 cursor-pointer hover:border-brand hover:text-brand hover:bg-brand/5 transition-all group"
              >
                 <Upload size={24} className="mb-1.5 group-hover:animate-bounce" />
                 <span className="text-[11px] font-bold">上传图片</span>
              </motion.div>
           </div>
         </motion.div>
       )}

       {activeTab === 'idcard' && (
         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {/* Front */}
               <div className="space-y-2">
                 <div className="text-[13px] font-bold text-neutral-9 flex items-center justify-between">
                    <span>上传身份证人像面</span>
                 </div>
                 <div 
                   onClick={() => !idFront && handleUploadId('front')}
                   className={`relative aspect-[1.58/1] rounded-2xl border-2 overflow-hidden transition-all ${
                     idFront?.status === 'done' ? 'border-brand shadow-sm' : 'border-dashed border-neutral-4 bg-neutral-1/50 cursor-pointer hover:border-brand hover:bg-brand/5'
                   }`}
                 >
                   {!idFront && (
                     <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-6">
                       <CreditCard size={32} className="mb-2 text-neutral-4 group-hover:text-brand transition-colors" />
                       <span className="text-[13px] font-bold">点击拍摄/上传人像面</span>
                     </div>
                   )}
                   {idFront?.status === 'uploading' && (
                     <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center text-brand">
                       <Loader2 size={24} className="animate-spin mb-2" />
                       <span className="text-[11px] font-bold">上传中 {idFront.progress}%</span>
                     </div>
                   )}
                   {idFront?.status === 'done' && (
                     <div className="absolute inset-0 flex items-center justify-center group">
                       <img src={idFront.url} alt="ID Front" className="w-full h-full object-cover" />
                       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <button className="p-1.5 bg-white/20 hover:bg-white/40 rounded-lg text-white transition-all hover:scale-110">
                             <Eye size={16} />
                          </button>
                          <button 
                            onClick={(e) => removeIdDoc('front', e)}
                            className="p-1.5 bg-error/80 hover:bg-error rounded-lg text-white transition-all hover:scale-110"
                          >
                             <Trash2 size={16} />
                          </button>
                       </div>
                     </div>
                   )}
                 </div>
                 {idFront?.status === 'done' && (
                    <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center text-brand items-center gap-1.5 text-[12px] font-bold pt-1">
                       <CheckCircle size={14} /> 上传成功
                    </motion.div>
                 )}
               </div>

               {/* Back */}
               <div className="space-y-2">
                 <div className="text-[13px] font-bold text-neutral-9 flex items-center justify-between">
                    <span>上传身份证国徽面</span>
                 </div>
                 <div 
                   onClick={() => !idBack && handleUploadId('back')}
                   className={`relative aspect-[1.58/1] rounded-2xl border-2 overflow-hidden transition-all ${
                     idBack?.status === 'done' ? 'border-brand shadow-sm' : 'border-dashed border-neutral-4 bg-neutral-1/50 cursor-pointer hover:border-brand hover:bg-brand/5'
                   }`}
                 >
                   {!idBack && (
                     <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-6">
                       <File size={32} className="mb-2 text-neutral-4 group-hover:text-brand transition-colors" />
                       <span className="text-[13px] font-bold">点击拍摄/上传国徽面</span>
                     </div>
                   )}
                   {idBack?.status === 'uploading' && (
                     <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center text-brand">
                       <Loader2 size={24} className="animate-spin mb-2" />
                       <span className="text-[11px] font-bold">上传中 {idBack.progress}%</span>
                     </div>
                   )}
                   {idBack?.status === 'done' && (
                     <div className="absolute inset-0 flex items-center justify-center group">
                       <img src={idBack.url} alt="ID Back" className="w-full h-full object-cover" />
                       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <button className="p-1.5 bg-white/20 hover:bg-white/40 rounded-lg text-white transition-all hover:scale-110">
                             <Eye size={16} />
                          </button>
                          <button 
                            onClick={(e) => removeIdDoc('back', e)}
                            className="p-1.5 bg-error/80 hover:bg-error rounded-lg text-white transition-all hover:scale-110"
                          >
                             <Trash2 size={16} />
                          </button>
                       </div>
                     </div>
                   )}
                 </div>
                 {idBack?.status === 'done' && (
                    <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="flex justify-center text-brand items-center gap-1.5 text-[12px] font-bold pt-1">
                       <CheckCircle size={14} /> 上传成功
                    </motion.div>
                 )}
               </div>
            </div>
            
            <div className="bg-neutral-1 p-4 rounded-xl border border-neutral-2">
               <h4 className="text-[12px] font-bold text-neutral-9 mb-2 flex items-center gap-1.5"><AlertCircle size={14}/> 拍摄指引</h4>
               <ul className="text-[11px] text-neutral-6 space-y-1.5 list-disc pl-4 font-medium">
                  <li>请确保身份证边框完整，字体清晰可见、无遮挡。</li>
                  <li>请保持光线均匀，避免反光或过暗影响识别。</li>
                  <li>支持 jpg、png 等图片格式。</li>
               </ul>
            </div>
         </motion.div>
       )}
    </div>
  );
};

export const RadioPreview = () => {
  const [selected, setSelected] = useState('选项一');
  
  return (
    <div className="space-y-6">
       <div className="bg-neutral-0 dark:bg-neutral-2 rounded-2xl p-6 shadow-sm border border-neutral-3 space-y-4">
          {['选项一', '选项二'].map(opt => {
            const active = selected === opt;
            return (
              <div 
                key={opt}
                className="flex items-center justify-between cursor-pointer group"
                onClick={() => setSelected(opt)}
              >
                 <span className={`text-[15px] font-medium transition-colors ${active ? 'text-brand' : 'text-neutral-11'}`}>{opt}</span>
                 <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${active ? 'border-brand bg-brand shadow-sm shadow-brand/20' : 'border-neutral-4 bg-neutral-0 dark:bg-neutral-2 group-hover:border-brand/50'}`}>
                    <AnimatePresence>
                      {active && (
                         <motion.div 
                           initial={{ scale: 0 }} 
                           animate={{ scale: 1 }} 
                           exit={{ scale: 0 }}
                           className="w-2 h-2 bg-neutral-0 dark:bg-neutral-2 rounded-full bg-neutral-0 dark:bg-neutral-2"
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
                  active ? 'border-brand bg-brand/5 text-brand shadow-sm' : 'border-neutral-3 bg-neutral-0 dark:bg-neutral-2 text-neutral-11 hover:border-brand/40'
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
          <div className={`bg-neutral-0 dark:bg-neutral-2 g-radius-card border p-3.5 transition-all shadow-sm ${val1 ? 'border-brand/40 shadow-brand/5' : 'border-neutral-3 focus-within:border-brand focus-within:shadow-md'}`}>
             <div className="text-[12px] text-neutral-8 mb-1.5 font-medium transition-colors focus-within:text-brand">用户名</div>
             <input 
               type="text" 
               placeholder="请输入账号名称" 
               value={val1}
               onChange={(e) => setVal1(e.target.value)}
               className="w-full text-[15px] outline-none bg-transparent font-medium text-neutral-12 placeholder:text-neutral-6 placeholder:font-normal" 
             />
          </div>
          <div className="bg-neutral-2 g-radius-card border border-neutral-3 px-4 py-3.5 opacity-70">
             <div className="text-[12px] text-neutral-7 mb-1 font-medium">用户角色 (禁用态)</div>
             <input type="text" value={val2} disabled className="w-full text-[15px] outline-none bg-transparent text-neutral-9 cursor-not-allowed font-medium" />
          </div>
       </div>
       
       <div className="space-y-4">
          <h4 className="text-[14px] font-bold text-neutral-12 mb-2">02 操作与反馈</h4>
          <div className="bg-neutral-0 dark:bg-neutral-2 g-radius-card border border-neutral-3 px-4 py-4 flex items-center gap-3 focus-within:border-brand transition-colors shadow-sm focus-within:shadow-md">
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
          
          <div className="bg-error/5 g-radius-card border shadow-sm border-error px-4 py-3.5 transition-all">
             <input 
               type="text" 
               value={val4}
               onChange={e => setVal4(e.target.value)}
               className="w-full text-[15px] outline-none text-error font-medium bg-transparent" 
             />
             <div className="text-[11px] text-error mt-2 flex items-center gap-1.5 font-medium bg-error/10 py-1 px-2 g-radius-inner w-fit">
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
  const [on5, setOn5] = useState(true);
  
  return (
    <div className="space-y-8">
       {/* List Style */}
       <div className="space-y-3">
          <h4 className="text-[12px] text-neutral-8 font-bold uppercase tracking-wider">01. 基础列表样式</h4>
          <div className="bg-neutral-0 dark:bg-neutral-2 rounded-2xl shadow-sm border border-neutral-3 divide-y divide-neutral-2 px-5">
             <div className="py-4 flex justify-between items-center group cursor-pointer" onClick={() => setOn1(!on1)}>
                <span className="text-[15px] font-medium transition-colors group-hover:text-brand">Wi-Fi 分解开关</span>
                <div className={`w-[46px] h-[26px] rounded-full relative flex items-center px-1 transition-colors duration-300 ${on1 ? 'bg-brand' : 'bg-neutral-3'}`}>
                   <motion.div 
                     className="w-4 h-4 bg-neutral-0 dark:bg-neutral-2 rounded-full shadow-lg"
                     animate={{ x: on1 ? 20 : 0 }}
                     transition={{ type: "spring", stiffness: 500, damping: 30 }}
                   />
                </div>
             </div>
             <div className="py-4 flex justify-between items-center group cursor-pointer" onClick={() => setOn2(!on2)}>
                <div className="flex flex-col">
                   <span className="text-[15px] font-medium transition-colors group-hover:text-brand">暗黑模式</span>
                   <span className="text-[11px] text-neutral-6">护眼设计，减少视力疲劳</span>
                </div>
                <div className={`w-[46px] h-[26px] rounded-full relative flex items-center px-1 transition-colors duration-300 ${on2 ? 'bg-brand' : 'bg-neutral-3'}`}>
                   <motion.div 
                     className="w-4 h-4 bg-neutral-0 dark:bg-neutral-2 rounded-full shadow-lg"
                     animate={{ x: on2 ? 20 : 0 }}
                     transition={{ type: "spring", stiffness: 500, damping: 30 }}
                   />
                </div>
             </div>
          </div>
       </div>

       {/* Internal Text Style */}
       <div className="space-y-3">
          <h4 className="text-[12px] text-neutral-8 font-bold uppercase tracking-wider">02. 状态文字样式 (Status Text)</h4>
          <div className="bg-neutral-0 dark:bg-neutral-2 p-6 rounded-2xl shadow-sm border border-neutral-3 flex flex-wrap gap-8 justify-center items-center">
             <div className="flex flex-col items-center gap-3">
                <div 
                  className={`w-[68px] h-[32px] rounded-full relative flex items-center px-1.5 cursor-pointer transition-all duration-300 ${on5 ? 'bg-brand shadow-inner shadow-brand/20' : 'bg-neutral-3 shadow-inner'}`}
                  onClick={() => setOn5(!on5)}
                >
                   <span className={`absolute text-[10px] font-bold transition-all duration-300 select-none ${on5 ? 'left-2.5 text-white opacity-100' : 'left-8 text-neutral-6 opacity-0'}`}>
                      ON
                   </span>
                   <span className={`absolute text-[10px] font-bold transition-all duration-300 select-none ${on5 ? 'right-8 text-white opacity-0' : 'right-2.5 text-neutral-6 opacity-100'}`}>
                      OFF
                   </span>
                   <motion.div 
                     className="w-6 h-6 bg-neutral-0 dark:bg-neutral-2 rounded-full shadow-md z-10"
                     animate={{ x: on5 ? 36 : 0 }}
                     transition={{ type: "spring", stiffness: 400, damping: 25 }}
                   />
                </div>
                <span className="text-[11px] font-bold text-neutral-6 uppercase tracking-widest">文字内显</span>
             </div>

             <div className="flex flex-col items-center gap-3">
                <div 
                  className={`w-[56px] h-[30px] rounded-full relative flex items-center px-1 cursor-pointer transition-colors duration-300 ${on3 ? 'bg-success shadow-inner' : 'bg-neutral-3 shadow-inner'}`}
                  onClick={() => setOn3(!on3)}
                >
                   <motion.div 
                     className="w-6 h-6 bg-neutral-0 dark:bg-neutral-2 rounded-full shadow-md flex items-center justify-center"
                     animate={{ x: on3 ? 28 : 0 }}
                     transition={{ type: "spring", stiffness: 500, damping: 30 }}
                   >
                     {on3 ? (
                        <Check size={12} className="text-success" strokeWidth={4} />
                     ) : (
                        <X size={12} className="text-neutral-4" strokeWidth={4} />
                     )}
                   </motion.div>
                </div>
                <span className="text-[11px] font-bold text-neutral-6 uppercase tracking-widest">图标辅助</span>
             </div>

             <div className="flex flex-col items-center gap-3">
                <div className="w-[52px] h-[30px] bg-neutral-2 border border-neutral-3 rounded-full flex items-center px-1 opacity-50 cursor-not-allowed">
                   <div className="w-5 h-5 bg-neutral-4 rounded-full" />
                </div>
                <span className="text-[11px] font-bold text-neutral-6 uppercase tracking-widest">禁用状态</span>
             </div>
          </div>
       </div>

       {/* Block Style */}
       <div className="bg-brand-light/20 p-5 rounded-2xl border border-brand/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${on4 ? 'bg-brand text-white' : 'bg-neutral-0 dark:bg-neutral-2 text-neutral-6 border border-neutral-3'}`}>
                <Bell size={20} />
             </div>
             <div>
                <div className="text-[14px] font-bold text-neutral-12">消息通知推送</div>
                <div className="text-[10px] text-neutral-6">即时获取最新动态</div>
             </div>
          </div>
          <div 
            className={`w-[52px] h-[30px] rounded-full relative flex items-center px-1 cursor-pointer transition-all ${on4 ? 'bg-brand' : 'bg-neutral-3'}`}
            onClick={() => setOn4(!on4)}
          >
             <motion.div 
               className="w-6 h-6 bg-neutral-0 dark:bg-neutral-2 rounded-full shadow-lg"
               animate={{ x: on4 ? 22 : 0 }}
               transition={{ type: "spring", stiffness: 500, damping: 30 }}
             />
          </div>
       </div>
    </div>
  );
};

// --- Optimized Checkbox Component ---
const GCheckbox = ({ 
  checked, 
  indeterminate, 
  disabled, 
  onChange, 
  children,
  className = ""
}: { 
  checked?: boolean; 
  indeterminate?: boolean; 
  disabled?: boolean; 
  onChange?: (val: boolean) => void;
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <label 
      className={`flex items-center gap-3 cursor-pointer group select-none ${disabled ? 'opacity-40 cursor-not-allowed' : ''} ${className}`}
      onClick={(e) => {
        if (disabled) return;
        onChange?.(!checked);
      }}
    >
      <div className="relative flex items-center justify-center">
        <motion.div
           initial={false}
           animate={{
             backgroundColor: checked || indeterminate ? 'var(--color-brand)' : '#ffffff',
             borderColor: checked || indeterminate ? 'var(--color-brand)' : '#d4d4d4',
           }}
           className={`w-5 h-5 g-radius border-[1.5px] flex items-center justify-center transition-shadow ${!disabled ? 'group-hover:border-brand/60 group-active:scale-90' : ''} ${(checked || indeterminate) && !disabled ? 'shadow-[0_2px_8px_rgba(var(--brand-rgb,52,123,255),0.3)]' : ''}`}
        >
          <AnimatePresence mode="wait">
            {checked ? (
              <motion.svg
                key="check"
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 text-white"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
              >
                <motion.path
                  d="M5 12l5 5L20 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.svg>
            ) : indeterminate ? (
              <motion.div
                key="indeterminate"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0, scaleX: 0 }}
                className="w-2.5 h-0.5 bg-neutral-0 dark:bg-neutral-2 rounded-full"
              />
            ) : null}
          </AnimatePresence>
        </motion.div>
      </div>
      {children && (
        <span className={`text-[15px] font-medium transition-colors ${checked && !disabled ? 'text-brand' : 'text-neutral-11'}`}>
          {children}
        </span>
      )}
    </label>
  );
};

export const CheckboxPreview = () => {
  const [list, setList] = useState([
    { id: 1, label: '设计规范文档', checked: true },
    { id: 2, label: '品牌配色标准', checked: false },
    { id: 3, label: '交互动效规范', checked: false },
    { id: 4, label: '多端适配方案', checked: false },
  ]);

  const allChecked = list.every(i => i.checked);
  const someChecked = list.some(i => i.checked) && !allChecked;

  const toggleAll = () => {
    const targetValue = !allChecked;
    setList(list.map(i => ({ ...i, checked: targetValue })));
  };

  const toggleItem = (id: number) => {
    setList(list.map(i => i.id === id ? { ...i, checked: !i.checked } : i));
  };
  
  return (
    <div className="space-y-6">
       {/* List Group */}
       <div className="bg-neutral-1 g-radius-card p-2 shadow-sm border border-neutral-3 animate-fade-in">
          <div className="p-4 border-b border-neutral-1 bg-neutral-1/50 rounded-t-[calc(var(--radius)*1.5-2px)]">
             <GCheckbox 
               checked={allChecked} 
               indeterminate={someChecked}
               onChange={toggleAll}
             >
               全选内容 ({list.filter(i => i.checked).length}/{list.length})
             </GCheckbox>
          </div>
          
          <div className="p-2 space-y-1">
             {list.map(item => (
                <div 
                  key={item.id}
                  className={`p-3 g-radius flex items-center justify-between transition-all ${item.checked ? 'bg-brand/5' : 'hover:bg-neutral-1'}`}
                >
                   <GCheckbox 
                     checked={item.checked} 
                     onChange={() => toggleItem(item.id)}
                   >
                     {item.label}
                   </GCheckbox>
                   <div className="text-[10px] text-neutral-4 font-mono">ID: 0{item.id}</div>
                </div>
             ))}
          </div>
       </div>

       {/* Horizontal & Card Style */}
       <div className="grid grid-cols-2 gap-4">
          <div 
            onClick={() => toggleItem(1)}
            className={`p-4 g-radius-card border-2 transition-all cursor-pointer ${list[0].checked ? 'border-brand bg-brand/5' : 'border-neutral-3 bg-neutral-1'}`}
          >
             <div className="flex justify-between items-start mb-2">
                <div className={`w-8 h-8 g-radius flex items-center justify-center ${list[0].checked ? 'bg-brand text-white' : 'bg-neutral-2 text-neutral-6'}`}>
                   <LayoutIcon size={16} />
                </div>
                <GCheckbox checked={list[0].checked} onChange={() => toggleItem(1)} />
             </div>
             <div className="text-[13px] font-bold text-neutral-12">精选内容</div>
             <div className="text-[10px] text-neutral-6 mt-1">每日更新优质资源</div>
          </div>

          <div className="p-4 g-radius-card border border-neutral-3 bg-neutral-2 opacity-50 flex flex-col items-center justify-center gap-2 cursor-not-allowed">
             <GCheckbox disabled checked>禁用选中</GCheckbox>
          </div>
       </div>
       
       {/* Simple Agreement */}
       <div className="px-5 py-4 bg-neutral-1 border border-neutral-3 g-radius-card flex gap-3 shadow-sm">
          <div className="pt-0.5">
             <GCheckbox checked={list[1].checked} onChange={() => toggleItem(2)} />
          </div>
          <p className="text-[12px] text-neutral-8 leading-relaxed font-medium">
             提交即代表您已阅读并同意 <span className="text-brand font-bold">《广联隐私政策》</span> 与授权协议，我们将严格保护您的信息安全。
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
          <h4 className="text-[14px] font-bold text-neutral-11">01 基础列表</h4>
          <div className="bg-neutral-0 dark:bg-neutral-2 rounded-xl overflow-hidden shadow-sm border border-neutral-3">
            <div className="px-4 py-3.5 flex items-center justify-between border-b border-neutral-2 active:bg-neutral-1 hover:bg-neutral-50 transition-colors cursor-pointer">
               <span className="text-sm font-medium text-neutral-11">单行列表</span>
               <ChevronRight size={18} className="text-neutral-6" />
            </div>
            <div className="px-4 py-3.5 flex items-center justify-between active:bg-neutral-1 hover:bg-neutral-50 transition-colors cursor-pointer">
               <span className="text-sm font-medium text-neutral-11">单行列表</span>
               <div className="flex items-center gap-2">
                  <span className="text-sm text-neutral-6">详细信息</span>
                  <ChevronRight size={18} className="text-neutral-6" />
               </div>
            </div>
          </div>
       </div>

       <div className="space-y-3">
          <h4 className="text-[14px] font-bold text-neutral-11">02 带元素的列表</h4>
          <div className="bg-neutral-0 dark:bg-neutral-2 rounded-xl overflow-hidden shadow-sm border border-neutral-3">
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
                     className="w-4 h-4 bg-neutral-0 dark:bg-neutral-2 rounded-full shadow-sm"
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
                     className="w-4 h-4 bg-neutral-0 dark:bg-neutral-2 rounded-full shadow-sm"
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
             <div className="w-16 h-16 g-radius bg-brand/10 text-brand flex items-center justify-center font-bold text-xl cursor-pointer hover:bg-brand hover:text-white transition-colors duration-300 shadow-sm hover:shadow-brand/20 hover:scale-105">L</div>
             <div className="w-12 h-12 g-radius bg-brand/10 text-brand flex items-center justify-center font-bold text-lg cursor-pointer hover:bg-brand hover:text-white transition-colors duration-300 shadow-sm hover:shadow-brand/20 hover:scale-105">M</div>
             <div className="w-8 h-8 g-radius bg-brand/10 text-brand flex items-center justify-center font-bold text-sm cursor-pointer hover:bg-brand hover:text-white transition-colors duration-300 shadow-sm hover:shadow-brand/20 hover:scale-105">S</div>
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
                  className={`w-12 h-12 g-radius border-2 border-neutral-0 dark:border-neutral-3 flex items-center justify-center shadow-sm z-0 transition-transform cursor-pointer
                    ${hovered === idx ? '-translate-y-2 bg-brand text-white border-brand' : 'bg-neutral-2 text-neutral-6'}
                  `}
                >
                   <span className="font-bold text-sm">{idx}</span>
                </div>
             ))}
             <div className="w-12 h-12 g-radius bg-neutral-2 border-2 border-neutral-0 dark:border-neutral-3 flex items-center justify-center opacity-80 shadow-sm z-0 hover:bg-neutral-3 cursor-pointer">
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
             <div className="w-12 h-12 bg-neutral-1 border border-neutral-3 g-radius flex items-center justify-center group-hover:bg-brand-light group-hover:border-brand/30 transition-all shadow-sm">
                <Bell size={24} className="text-neutral-6 group-hover:text-brand group-hover:scale-110 transition-all" />
             </div>
             <AnimatePresence>
               {count > 0 && (
                 <motion.div 
                   initial={{ scale: 0 }}
                   animate={{ scale: 1 }}
                   exit={{ scale: 0 }}
                   className="absolute -top-1 -right-1 w-3 h-3 bg-error rounded-full border-2 border-neutral-0 dark:border-neutral-3 shadow-sm" 
                 />
               )}
             </AnimatePresence>
          </div>
          <div className="relative group cursor-pointer" onClick={() => setCount(c => c + 1)}>
             <div className="w-12 h-12 bg-neutral-1 border border-neutral-3 g-radius flex items-center justify-center group-hover:bg-brand-light group-hover:border-brand/30 transition-all shadow-sm">
                <MessageSquare size={24} className="text-neutral-6 group-hover:text-brand group-hover:scale-110 transition-all" />
             </div>
             <AnimatePresence>
               {count > 0 && (
                 <motion.div 
                   key={count}
                   initial={{ scale: 1.5, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   className="absolute -top-2 -right-2 px-1.5 py-0.5 bg-error text-white text-[10px] font-bold rounded-full border-2 border-neutral-0 dark:border-neutral-3 shadow-sm"
                 >
                   {count > 99 ? '99+' : count}
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
       </div>
       
       <div className="w-full bg-neutral-0 dark:bg-neutral-2 p-4 g-radius-card shadow-sm border border-neutral-3 hover:border-brand/30 transition-colors cursor-pointer group" onClick={() => setCount(0)}>
          <div className="flex items-center justify-between">
             <span className="text-sm font-medium group-hover:text-brand transition-colors">系统通知 <span className="text-xs text-neutral-6 ml-1">(点击清除)</span></span>
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
           <div key={idx} className={`border g-radius-card bg-neutral-0 dark:bg-neutral-2 overflow-hidden transition-all duration-300 ${isOpen ? 'border-brand/40 shadow-md shadow-brand/5' : 'border-neutral-3 shadow-sm hover:border-neutral-4'}`}>
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
                     <div className="p-4 pt-2 text-sm text-neutral-7 border-t border-brand/10 bg-neutral-0 dark:bg-neutral-2 whitespace-pre-line leading-relaxed">
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
  const [timeLeft, setTimeLeft] = useState(172800 + 43200 + 1800 + 45); // 2 days, 12 hours, 30 min, 45 sec
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const reset = () => setTimeLeft(172800 + 43200 + 1800 + 45);

  const d = Math.floor(timeLeft / 86400).toString().padStart(2, '0');
  const h = Math.floor((timeLeft % 86400) / 3600).toString().padStart(2, '0');
  const m = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, '0');
  const s = (timeLeft % 60).toString().padStart(2, '0');

  const TimeUnit = ({ value, label }: { value: string; label: string }) => (
    <div className="flex flex-col items-center gap-1.5">
       <div className="relative">
          <div className="bg-neutral-12 text-white w-12 h-14 flex items-center justify-center rounded-lg font-mono text-2xl font-bold shadow-lg border-b-4 border-neutral-8">
             <AnimatePresence mode="popLayout text-mono">
                <motion.span
                  key={value}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {value}
                </motion.span>
             </AnimatePresence>
          </div>
       </div>
       <span className="text-[10px] text-neutral-6 font-bold uppercase tracking-tighter">{label}</span>
    </div>
  );

  return (
    <div className="space-y-12 flex flex-col items-center group relative py-6">
       <button onClick={reset} className="absolute -right-4 -top-2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] bg-neutral-2 px-3 py-1.5 rounded-full text-neutral-7 hover:text-brand border border-neutral-3 hover:border-brand/30 flex items-center gap-1.5 font-bold shadow-sm z-10">
         <RefreshCw size={12}/> 重新开始
       </button>

       {/* Large Interactive Variant */}
       <div className="space-y-4 flex flex-col items-center w-full">
          <p className="text-[11px] text-neutral-4 font-bold uppercase tracking-[0.2em] mb-2">01. 周期倒计时 (Full Detail)</p>
          <div className="flex items-center gap-2.5 p-6 bg-neutral-0 dark:bg-neutral-2 g-radius-card border border-neutral-2 shadow-sm ring-4 ring-neutral-1/50">
             <TimeUnit value={d} label="Days" />
             <span className="text-neutral-3 font-bold text-xl -mt-5">:</span>
             <TimeUnit value={h} label="Hours" />
             <span className="text-neutral-3 font-bold text-xl -mt-5">:</span>
             <TimeUnit value={m} label="Mins" />
             <span className="text-neutral-3 font-bold text-xl -mt-5">:</span>
             <TimeUnit value={s} label="Secs" />
          </div>
       </div>

       {/* Split Section */}
       <div className="w-full flex flex-col gap-10 items-center justify-center">
          <div className="space-y-4 flex flex-col items-center">
             <p className="text-[11px] text-neutral-4 font-bold uppercase tracking-[0.2em]">02. 紧凑区块 (Compact)</p>
             <div className="flex items-center gap-1.5 text-brand font-bold text-lg tabular-nums">
                <div className="bg-brand text-white w-9 h-9 flex items-center justify-center g-radius shadow-lg shadow-brand/20">{h}</div>
                <span className="text-brand/40">:</span>
                <div className="bg-brand text-white w-9 h-9 flex items-center justify-center g-radius shadow-lg shadow-brand/20">{m}</div>
                <span className="text-brand/40">:</span>
                <div className="bg-brand text-white w-9 h-9 flex items-center justify-center g-radius shadow-lg shadow-brand/20">{s}</div>
             </div>
          </div>

          <div className="space-y-4 flex flex-col items-center">
             <p className="text-[11px] text-neutral-4 font-bold uppercase tracking-[0.2em]">03. 线性文本 (Linear Text)</p>
             <div className="flex items-center gap-2 text-neutral-12 font-mono font-bold text-2xl tabular-nums bg-neutral-2/50 px-6 py-2.5 rounded-full border border-neutral-3">
                <Clock size={20} className="text-brand mr-1 animate-pulse" />
                <span className="text-neutral-12 font-mono">{h}</span>
                <span className="text-neutral-6 text-sm font-normal ml-0.5">h</span>
                <span className="opacity-20 mx-1.5 font-light">|</span>
                <span className="text-neutral-12 font-mono">{m}</span>
                <span className="text-neutral-6 text-sm font-normal ml-0.5">m</span>
                <span className="opacity-20 mx-1.5 font-light">|</span>
                <span className="text-brand font-mono">{s}</span>
                <span className="text-neutral-6 text-sm font-normal ml-0.5">s</span>
             </div>
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
    <div className="flex flex-col items-center justify-center p-12 bg-neutral-0 dark:bg-neutral-2 g-radius-card shadow-sm border border-neutral-3 transition-all">
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [items, setItems] = useState([
    { id: 1, icon: '⭐', color: 'text-warning', bg: 'bg-warning/10', label: '收藏', border: 'hover:border-warning/30 group-hover:shadow-warning/20', img: null as string | null },
    { id: 2, icon: '📍', color: 'text-brand', bg: 'bg-brand/10', label: '地点', border: 'hover:border-brand/30 group-hover:shadow-brand/20', img: null as string | null },
    { id: 3, icon: '🛒', color: 'text-success', bg: 'bg-success/10', label: '商城', border: 'hover:border-success/30 group-hover:shadow-success/20', img: null as string | null },
    { id: 4, icon: '🎬', color: 'text-error', bg: 'bg-error/10', label: '电影', border: 'hover:border-error/30 group-hover:shadow-error/20', img: null as string | null },
    { id: 5, icon: '🍱', color: 'text-orange-500', bg: 'bg-orange-50', label: '外卖', border: 'hover:border-orange-200', img: null as string | null },
    { id: 6, icon: '🚗', color: 'text-blue-500', bg: 'bg-blue-50', label: '打车', border: 'hover:border-blue-200', img: null as string | null },
    { id: 7, icon: '🎫', color: 'text-purple-500', bg: 'bg-purple-50', label: '门票', border: 'hover:border-purple-200', img: null as string | null },
    { id: 8, icon: '🎮', color: 'text-indigo-500', bg: 'bg-indigo-50', label: '游戏', border: 'hover:border-indigo-200', img: null as string | null },
    { id: 9, icon: '📚', color: 'text-emerald-500', bg: 'bg-emerald-50', label: '阅读', border: 'hover:border-emerald-200', img: null as string | null },
    { id: 10, icon: '💊', color: 'text-teal-500', bg: 'bg-teal-50', label: '医疗', border: 'hover:border-teal-200', img: null as string | null },
    { id: 11, icon: '⚽', color: 'text-green-600', bg: 'bg-green-50', label: '运动', border: 'hover:border-green-200', img: null as string | null },
    { id: 12, icon: '⚙️', color: 'text-neutral-10', bg: 'bg-neutral-2', label: '设置', border: 'hover:border-neutral-4 group-hover:shadow-black/5', img: null as string | null },
  ]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && activeId !== null) {
      const url = URL.createObjectURL(file);
      setItems(prev => prev.map(item => item.id === activeId ? { ...item, img: url } : item));
      setActiveId(null);
    }
  };

  const triggerUpload = (id: number) => {
    setActiveId(id);
    fileInputRef.current?.click();
  };

  // Logic for display: if not expanded, show 7 items + 1 "More" button
  const displayItems = isExpanded ? items : items.slice(0, 7);

  return (
    <div className="space-y-6 bg-neutral-2 p-6 g-radius-card w-full max-w-sm mx-auto shadow-inner relative group/panel">
       <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleUpload} />
       
       <div className="flex justify-between items-center mb-1">
          <div className="flex flex-col">
             <h4 className="text-[11px] font-black text-neutral-6 uppercase tracking-widest px-1">交互式宫格组合</h4>
             <p className="text-[9px] text-neutral-4 px-1">点击图标替换内容 · 点击"更多"展开</p>
          </div>
          <div className="text-[10px] text-brand font-bold opacity-0 group-hover/panel:opacity-100 transition-opacity uppercase tracking-tighter">Icon Grid v2</div>
       </div>

       <motion.div 
         layout
         className="bg-neutral-0 dark:bg-neutral-2 p-4 g-radius shadow-md border border-neutral-3 relative overflow-hidden"
       >
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none" />
          
          <div className="grid grid-cols-4 gap-y-6 gap-x-4">
             <AnimatePresence mode="popLayout" initial={false}>
                {displayItems.map((item) => (
                   <motion.div 
                      key={item.id} 
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => triggerUpload(item.id)}
                      className="flex flex-col items-center gap-2 cursor-pointer group"
                   >
                      <div className={`w-12 h-12 g-radius ${item.bg} flex items-center justify-center transition-all duration-300 border border-transparent ${item.border} shadow-sm relative overflow-hidden group-hover:shadow-lg`}>
                         {item.img ? (
                           <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
                         ) : (
                           <span className={`text-xl ${item.color} relative z-10 drop-shadow-sm`}>{item.icon}</span>
                         )}
                         <div className="absolute inset-0 bg-white/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all text-white bg-black/40 rounded-full p-1.5 backdrop-blur-sm">
                              <Upload size={14} strokeWidth={3} />
                            </div>
                         </div>
                      </div>
                      <span className="text-[11px] text-neutral-8 font-bold group-hover:text-brand transition-colors text-center truncate w-full">{item.label}</span>
                   </motion.div>
                ))}

                {!isExpanded && (
                   <motion.div 
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => { e.stopPropagation(); setIsExpanded(true); }}
                      className="flex flex-col items-center gap-2 cursor-pointer group/more"
                   >
                      <div className="w-12 h-12 g-radius bg-neutral-1 flex items-center justify-center transition-all duration-300 border border-dashed border-neutral-3 shadow-sm group-hover/more:border-brand group-hover/more:bg-brand/5">
                         <div className="flex gap-0.5">
                            <div className="w-1 h-1 rounded-full bg-neutral-4 group-hover/more:bg-brand transition-colors" />
                            <div className="w-1 h-1 rounded-full bg-neutral-4 group-hover/more:bg-brand transition-colors" />
                            <div className="w-1 h-1 rounded-full bg-neutral-4 group-hover/more:bg-brand transition-colors" />
                         </div>
                      </div>
                      <span className="text-[11px] text-neutral-6 font-bold group-hover/more:text-brand transition-colors">更多</span>
                   </motion.div>
                )}
             </AnimatePresence>
          </div>

          {isExpanded && (
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="mt-6 pt-4 border-t border-neutral-2 flex justify-center"
             >
                <button 
                  onClick={() => setIsExpanded(false)}
                  className="flex items-center gap-2 px-4 py-1.5 bg-neutral-1 hover:bg-neutral-2 text-[11px] font-bold text-neutral-6 rounded-full transition-colors border border-neutral-3"
                >
                  <ChevronDown size={14} className="rotate-180" />
                  收起内容
                </button>
             </motion.div>
          )}
       </motion.div>
    </div>
  );
};

export const SwiperPreview = () => {
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState([
    { id: 1, title: '春季特惠开启', tag: 'HOT EVENT', bg: 'from-brand/20 to-brand-dark/20', color: 'bg-brand', img: null as string | null },
    { id: 2, title: '新款上阵', tag: 'NEW ARRIVAL', bg: 'from-success/20 to-success-dark/20', color: 'bg-success', img: null as string | null },
    { id: 3, title: '限时秒杀', tag: 'FLASH SALE', bg: 'from-warning/20 to-error/20', color: 'bg-warning', img: null as string | null },
  ]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSlides(prev => prev.map((s, idx) => idx === current ? { ...s, img: url } : s));
    }
  };

  return (
    <div className="space-y-4 max-w-md mx-auto w-full group/swiper">
       <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleUpload} />
       
       <div className="relative w-full aspect-[21/9] bg-neutral-2 g-radius-card overflow-hidden shadow-xl group cursor-grab active:cursor-grabbing border border-neutral-3">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div 
               key={current}
               initial={{ opacity: 0, x: 200 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -200 }}
               transition={{ type: "spring", stiffness: 260, damping: 20 }}
               className="absolute inset-0"
            >
               {slides[current].img ? (
                 <div className="w-full h-full relative">
                   <img src={slides[current].img} alt={slides[current].title} className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
                 </div>
               ) : (
                 <div className={`absolute inset-0 bg-gradient-to-r ${slides[current].bg}`} />
               )}
               
               <div className="absolute inset-0 flex flex-col items-start justify-center p-8 text-white">
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.8, y: 0 }}
                    className="text-[10px] font-black uppercase tracking-[0.4em] mb-2 drop-shadow-md text-white"
                  >
                    {slides[current].tag}
                  </motion.p>
                  <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl md:text-3xl font-black tracking-tight drop-shadow-lg leading-tight text-white mb-4"
                  >
                    {slides[current].title}
                  </motion.h2>
                  
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[11px] font-bold hover:bg-white/40 transition-all shadow-lg text-white"
                  >
                    <ImageIcon size={14} />
                    自定义封面
                  </motion.button>
               </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute top-1/2 left-3 -translate-y-1/2 flex flex-col gap-2 z-20">
             <button 
                onClick={() => setCurrent(c => (c - 1 + slides.length) % slides.length)}
                className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-white/30 backdrop-blur-xl rounded-full text-white border border-white/20 transition-all active:scale-90"
             >
                <ChevronRight size={20} className="rotate-180" />
             </button>
          </div>
          <div className="absolute top-1/2 right-3 -translate-y-1/2 flex flex-col gap-2 z-20">
             <button 
                onClick={() => setCurrent(c => (c + 1) % slides.length)}
                className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-white/30 backdrop-blur-xl rounded-full text-white border border-white/20 transition-all active:scale-90"
             >
                <ChevronRight size={20} />
             </button>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">
             {slides.map((s, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setCurrent(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer shadow-sm ${current === idx ? 'w-8 bg-neutral-0 dark:bg-neutral-2' : 'w-1.5 bg-white/30 hover:bg-white/60'}`}
                />
             ))}
          </div>
       </div>
    </div>
  );
};

// --- Feedback Components Previews ---

export const ShadowSystemPreview = () => {
  return (
    <div className="space-y-12 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { 
            title: '上投影 (Top Shadow)', 
            desc: '用于底部导航、底部面板等贴合屏幕底部的微悬浮模块。',
            style: 'shadow-[0_-8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_-8px_40px_rgba(0,0,0,0.3)]',
            bg: 'bg-neutral-0',
            pos: '底部模块'
          },
          { 
            title: '中投影 (Middle Shadow)', 
            desc: '用于卡片、核心功能按钮等页面主体部分的悬浮模块。',
            style: 'shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_50px_rgba(0,0,0,0.4)]',
            bg: 'bg-neutral-0',
            pos: '中间模块'
          },
          { 
            title: '下投影 (Bottom Shadow)', 
            desc: '用于顶部导航、下拉通知等贴合屏幕顶部的覆盖型模块。',
            style: 'shadow-[0_8px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)]',
            bg: 'bg-neutral-0',
            pos: '顶部模块'
          }
        ].map((item, i) => (
          <div key={i} className="space-y-4">
             <div className={`p-8 rounded-[32px] ${item.bg} ${item.style} border border-neutral-2 flex flex-col items-center justify-center min-h-[200px] transition-transform hover:scale-[1.02]`}>
                <div className="text-[10px] font-black text-brand uppercase tracking-widest mb-2">{item.pos}</div>
                <div className="w-12 h-12 bg-neutral-1 rounded-2xl flex items-center justify-center text-neutral-4">
                   <Box size={24} />
                </div>
             </div>
             <div className="px-2">
                <h4 className="font-black text-neutral-11 text-[15px]">{item.title}</h4>
                <p className="text-[12px] text-neutral-6 font-medium leading-relaxed mt-1">{item.desc}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const LineSystemPreview = () => {
  return (
    <div className="space-y-12 py-6">
      <div className="space-y-8">
        <div className="p-8 bg-neutral-1 rounded-[32px] border border-neutral-2 space-y-10">
          <div className="space-y-4">
             <div className="flex items-center justify-between">
                <h4 className="text-sm font-black text-neutral-11 uppercase tracking-widest">01. 实线分割线 (Solid Divider)</h4>
                <span className="text-[10px] font-mono text-neutral-4">1px / neutral-2</span>
             </div>
             <div className="w-full h-px bg-neutral-2" />
             <p className="text-[12px] text-neutral-6 font-bold">用于最基础的内容块区分，弱化视觉分割，保持页面整体感。</p>
          </div>

          <div className="space-y-4">
             <div className="flex items-center justify-between">
                <h4 className="text-sm font-black text-neutral-11 uppercase tracking-widest">02. 虚线分割线 (Dashed Divider)</h4>
                <span className="text-[10px] font-mono text-neutral-4">1px dashed / neutral-3</span>
             </div>
             <div className="w-full h-px border-t border-dashed border-neutral-3" />
             <p className="text-[12px] text-neutral-6 font-bold">用于非绝对分割的逻辑块，增加细节精致感，常见于列表项或卡片内部。</p>
          </div>

          <div className="space-y-4">
             <div className="flex items-center justify-between">
                <h4 className="text-sm font-black text-neutral-11 uppercase tracking-widest">03. 边框 (Border)</h4>
                <span className="text-[10px] font-mono text-brand">1px solid / brand-10%</span>
             </div>
             <div className="flex gap-4">
                <div className="px-6 py-3 bg-neutral-0 dark:bg-neutral-2 border border-brand/20 rounded-xl text-brand text-sm font-black">描边按钮</div>
                <div className="px-4 py-1.5 bg-brand/5 border border-brand/20 rounded-full text-brand text-[11px] font-black uppercase tracking-widest">智能标签</div>
             </div>
             <p className="text-[12px] text-neutral-6 font-bold">增强元素的视觉感知，定义交互边界，大多应用于按钮、卡片、输入框等。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LayoutSystemPreview = () => {
  return (
    <div className="space-y-10 py-6">
      <div className="grid grid-cols-1 gap-12">
        <section className="space-y-6">
           <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-6 bg-brand rounded-full" />
              <h3 className="text-xl font-black text-neutral-11">模块化布局原则</h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: '原子化 (Atomic)', desc: '基于 4px/8px 栅格系统，所有间距、圆角必须符合步进规则。', icon: <Box size={24} /> },
                { title: '层次感 (Layering)', desc: '通过背景色 Z 轴堆叠与投影深浅明确父子容器关系。', icon: <Layers size={24} /> },
                { title: '响应式 (Responsive)', desc: '容器宽度采用流式百分比，但在移动端必须预留 20px 核心安全间距。', icon: <Smartphone size={24} /> }
              ].map((rule, i) => (
                <div key={i} className="p-6 bg-neutral-0 border border-neutral-2 rounded-[28px] shadow-sm hover:shadow-md transition-shadow">
                   <div className="text-brand mb-4">{rule.icon}</div>
                   <h4 className="font-black text-neutral-11 text-base mb-2">{rule.title}</h4>
                   <p className="text-[12px] text-neutral-6 font-medium leading-relaxed">{rule.desc}</p>
                </div>
              ))}
           </div>
        </section>

        <section className="space-y-6">
           <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-6 bg-brand rounded-full" />
              <h3 className="text-xl font-black text-neutral-11">标准间距指南 (Spacing)</h3>
           </div>
           <div className="p-8 bg-neutral-1 border border-neutral-2 rounded-[32px]">
              <div className="space-y-6">
                 {[
                   { label: '极小间距 (Extra Small)', val: '4px', usage: '文字描边、图标微调', color: 'bg-brand/20' },
                   { label: '基础间距 (Base)', val: '8px', usage: '同组元素、小部件内部间距', color: 'bg-brand/40' },
                   { label: '中等间距 (Medium)', val: '16px', usage: '列表项间距、卡片内边距', color: 'bg-brand/60' },
                   { label: '大间距 (Large)', val: '24px', usage: '模块间距、核心卡片间距', color: 'bg-brand/80' },
                   { label: '页边距 (Global Margin)', val: '20px', usage: '移动端页面左右安全边距', color: 'bg-brand' }
                 ].map((s, i) => (
                   <div key={i} className="flex items-center gap-6">
                      <div className={`${s.color} h-6 rounded`} style={{ width: s.val === '20px' ? '40px' : s.val }} />
                      <div className="flex-1 grid grid-cols-3 gap-4">
                         <span className="text-sm font-black text-neutral-11 whitespace-nowrap">{s.label}</span>
                         <span className="text-sm font-mono text-brand font-bold">{s.val}</span>
                         <span className="text-[11px] text-neutral-6 font-bold text-right">{s.usage}</span>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export const SliderPreview = () => {
  const [val1, setVal1] = useState(40);
  const [range, setRange] = useState({ min: 20, max: 80 });
  const [isDragging, setIsDragging] = useState<'none' | 'single' | 'min' | 'max'>('none');

  return (
    <div className="p-8 space-y-12 bg-neutral-1/50">
      <div className="space-y-8">
        {/* Scenario 1: Volume Control */}
        <div className="p-6 bg-neutral-0 dark:bg-neutral-2 rounded-3xl border border-neutral-2 shadow-sm space-y-6 transition-all hover:shadow-xl hover:shadow-brand/5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-brand/10 flex items-center justify-center text-brand">
                <Bell size={20} />
              </div>
              <div>
                <div className="text-[14px] font-black text-neutral-12">通知音量</div>
                <div className="text-[10px] text-neutral-6 font-bold uppercase tracking-wider">Notification Volume</div>
              </div>
            </div>
            <span className="text-xl font-black text-brand tabular-nums">{val1}%</span>
          </div>
          
          <div className="relative h-12 flex items-center group touch-none select-none">
            <div className="absolute inset-x-0 h-2.5 bg-neutral-1 rounded-full overflow-hidden border border-neutral-2">
               <motion.div 
                 animate={{ width: `${val1}%` }}
                 className="h-full bg-brand shadow-[0_0_20px_rgba(var(--brand-rgb),0.5)] relative overflow-hidden" 
               >
                  <motion.div 
                    animate={{ x: [0, 100] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-1/2"
                  />
               </motion.div>
            </div>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={val1} 
              onChange={(e) => setVal1(parseInt(e.target.value))}
              onMouseDown={() => setIsDragging('single')}
              onMouseUp={() => setIsDragging('none')}
              onTouchStart={() => setIsDragging('single')}
              onTouchEnd={() => setIsDragging('none')}
              className="absolute inset-x-0 w-full h-full opacity-0 cursor-pointer z-20"
            />
            <motion.div 
              style={{ left: `calc(${val1}% + ${(50 - val1) * 0.4}px)` }}
              animate={{ 
                scale: isDragging === 'single' ? 1.15 : 1,
                boxShadow: isDragging === 'single' ? '0 15px 35px rgba(var(--brand-rgb),0.3)' : '0 8px 20px rgba(0,0,0,0.1)'
              }}
              className="absolute w-9 h-9 bg-neutral-0 dark:bg-neutral-2 rounded-2xl border-2 border-brand pointer-events-none z-10 flex items-center justify-center transition-shadow"
            >
               <div className="w-1.5 h-6 bg-brand/20 rounded-full flex flex-col items-center justify-between py-1">
                  <div className="w-1 h-1 bg-brand rounded-full" />
                  <div className="w-1 h-1 bg-brand rounded-full" />
               </div>
            </motion.div>
          </div>
        </div>

        {/* Scenario 2: Price Range */}
        <div className="p-6 bg-neutral-0 dark:bg-neutral-2 rounded-3xl border border-neutral-2 shadow-sm space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                <CreditCard size={20} />
              </div>
              <div>
                <div className="text-[14px] font-black text-neutral-12">价格区间</div>
                <div className="text-[10px] text-neutral-6 font-bold uppercase tracking-wider">Price Range Selector</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
               <span className="text-sm font-black text-neutral-12">¥{range.min * 100}</span>
               <div className="w-4 h-0.5 bg-neutral-3 rounded-full" />
               <span className="text-sm font-black text-neutral-12">¥{range.max * 100}</span>
            </div>
          </div>

          <div className="relative h-12 flex items-center touch-none select-none">
            <div className="absolute inset-x-0 h-2.5 bg-neutral-1 rounded-full border border-neutral-2">
               <motion.div 
                 animate={{ 
                   left: `${range.min}%`,
                   width: `${range.max - range.min}%` 
                 }}
                 className="absolute h-full bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.3)]" 
               />
            </div>
            
            <input 
              type="range" min="0" max="100" value={range.min} 
              onChange={(e) => setRange({ ...range, min: Math.min(parseInt(e.target.value), range.max - 10) })}
              className="absolute inset-x-0 w-full h-full opacity-0 cursor-pointer pointer-events-auto z-20"
            />
            <input 
              type="range" min="0" max="100" value={range.max} 
              onChange={(e) => setRange({ ...range, max: Math.max(parseInt(e.target.value), range.min + 10) })}
              className="absolute inset-x-0 w-full h-full opacity-0 cursor-pointer pointer-events-auto z-20"
            />

            <motion.div 
              style={{ left: `calc(${range.min}% + ${(50 - range.min) * 0.3}px)` }}
              className="absolute w-8 h-8 bg-neutral-0 dark:bg-neutral-2 rounded-full border-2 border-orange-500 pointer-events-none z-10 shadow-xl flex items-center justify-center"
            >
               <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            </motion.div>
            <motion.div 
              style={{ left: `calc(${range.max}% + ${(50 - range.max) * 0.3}px)` }}
              className="absolute w-8 h-8 bg-neutral-0 dark:bg-neutral-2 rounded-full border-2 border-orange-500 pointer-events-none z-10 shadow-xl flex items-center justify-center"
            >
               <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="text-center px-4">
         <p className="text-[11px] text-neutral-6 font-bold leading-relaxed max-w-sm mx-auto">
            极简风格的高精度数值调节器。支持实时数值反馈与场景化容器嵌入，确保在不同业务语境下依然保持体验的先进性。
         </p>
      </div>
    </div>
  );
};


export const ProgressBarPreview = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => (p >= 100 ? 0 : p + 1));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-8 space-y-12 bg-neutral-1/50">
      <div className="space-y-10">
         {/* Scenario 1: File Upload */}
         <div className="p-6 bg-neutral-0 dark:bg-neutral-2 rounded-[32px] border border-neutral-2 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-brand/10 flex items-center justify-center text-brand">
                     <Download size={20} />
                  </div>
                  <div>
                     <div className="text-[14px] font-black text-neutral-12">资产包同步中</div>
                     <div className="text-[10px] text-neutral-6 font-bold uppercase tracking-wider">Syncing Assets</div>
                  </div>
               </div>
               <span className="text-[13px] font-black text-brand tabular-nums">{progress}%</span>
            </div>
            
            <div className="h-3 w-full bg-neutral-1 rounded-full overflow-hidden relative border border-neutral-2 shadow-inner">
               <motion.div 
                 animate={{ width: `${progress}%` }}
                 className="absolute inset-y-0 left-0 bg-brand shadow-[0_0_15px_rgba(var(--brand-rgb),0.5)]"
               />
               <motion.div 
                 initial={{ x: '-100%' }}
                 animate={{ x: '250%' }}
                 transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-30deg]"
               />
            </div>
            
            <div className="flex justify-between items-center text-[10px] font-black text-neutral-4 uppercase tracking-widest">
               <span>已下载 1.2 GB</span>
               <span>剩余约 12 秒</span>
            </div>
         </div>

         {/* Scenario 2: Multi-step Checkpoints */}
         <div className="p-6 bg-neutral-0 dark:bg-neutral-2 rounded-[32px] border border-neutral-2 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-2xl bg-success/10 flex items-center justify-center text-success">
                  <CheckCircle size={20} />
               </div>
               <div>
                  <div className="text-[14px] font-black text-neutral-12">身份核验进度</div>
                  <div className="text-[10px] text-neutral-6 font-bold uppercase tracking-wider">Verification Status</div>
               </div>
            </div>
            
            <div className="flex gap-2">
               {[1, 2, 3, 4, 5, 6].map((i) => {
                  const isActive = progress >= (i / 6) * 100;
                  const isCurrent = progress < (i / 6) * 100 && progress >= ((i-1) / 6) * 100;
                  return (
                    <div key={i} className="flex-1 h-2.5 rounded-full bg-neutral-1 relative overflow-hidden border border-neutral-2">
                       {isActive && (
                         <motion.div 
                           initial={{ scaleX: 0 }}
                           animate={{ scaleX: 1 }}
                           className="absolute inset-0 bg-success origin-left"
                         />
                       )}
                       {isCurrent && (
                          <motion.div 
                             animate={{ opacity: [0.3, 0.7, 0.3] }}
                             transition={{ repeat: Infinity, duration: 1 }}
                             className="absolute inset-0 bg-success/30"
                          />
                       )}
                    </div>
                  );
               })}
            </div>
            
            <div className="p-3 bg-neutral-1 rounded-xl border border-neutral-2 flex items-center gap-3">
               <div className={`w-2 h-2 rounded-full ${progress > 50 ? 'bg-success animate-pulse' : 'bg-neutral-3'}`} />
               <span className="text-[10px] font-bold text-neutral-6">
                  {progress > 80 ? '正在生成最终报告...' : progress > 50 ? '正在分析生物特征...' : '正在上传证件照片...'}
               </span>
            </div>
         </div>
      </div>

      <div className="text-center px-4">
         <p className="text-[11px] text-neutral-6 font-bold leading-relaxed max-w-sm mx-auto">
            动态感知的进度反馈系统。通过微拟态光感与分段式状态展示，为用户提供准确且具有仪式感的心理预期引导。
         </p>
      </div>
    </div>
  );
};

export const IndexBarPreview = () => {
  const sections = [
    { label: 'A', items: ['Audi 奥迪', 'Arcfox 极狐', 'Aion 埃安'] },
    { label: 'B', items: ['BMW 宝马', 'BYD 比亚迪', 'Bentley 宾利', 'Buick 别克'] },
    { label: 'C', items: ['Cadillac 凯迪拉克', 'Changan 长安', 'Chery 奇瑞'] },
    { label: 'D', items: ['Denza 腾势', 'Dongfeng 东风'] },
    { label: 'F', items: ['Ferrari 法拉利', 'Ford 福特', 'Foton 福田'] },
    { label: 'G', items: ['Geely 吉利', 'GAC 广汽'] },
    { label: 'H', items: ['Haval 哈弗', 'Honda 本田'] },
    { label: 'J', items: ['Jaguar 捷豹', 'Jeep 吉普'] },
  ];
  
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [showBubble, setShowBubble] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<any>(null);

  const scrollToIndex = (letter: string) => {
    setActiveLetter(letter);
    setShowBubble(true);
    
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShowBubble(false);
    }, 1000);

    const element = document.getElementById(`index-${letter}`);
    if (element && scrollRef.current) {
      scrollRef.current.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden bg-neutral-0 dark:bg-neutral-2">
      {/* Header */}
      <div className="h-14 px-6 border-b border-neutral-2 flex items-center justify-between z-30 shrink-0 bg-white/80 backdrop-blur-md">
        <h3 className="font-black text-[15px] text-neutral-12 uppercase tracking-tight">Select Brand</h3>
        <div className="flex items-center gap-3">
           <SearchIcon size={18} className="text-neutral-4" />
           <div className="w-8 h-8 rounded-full bg-neutral-1 flex items-center justify-center border border-neutral-2">
             <span className="text-[10px] font-black">?</span>
           </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto no-scrollbar scroll-smooth bg-neutral-1">
         <div className="p-4 space-y-6">
            {sections.map((section) => (
              <div key={section.label} id={`index-${section.label}`} className="space-y-3">
                 <div className="px-2 text-xs font-black text-brand uppercase tracking-widest">{section.label}</div>
                 <div className="bg-neutral-0 dark:bg-neutral-2 rounded-[24px] border border-neutral-2 overflow-hidden shadow-sm group">
                    {section.items.map((item, i) => (
                      <div key={item} className={`px-5 py-4 text-[14px] font-bold text-neutral-11 active:bg-neutral-1 transition-all flex items-center justify-between ${i !== section.items.length - 1 ? 'border-b border-neutral-1' : ''}`}>
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-neutral-1 flex items-center justify-center border border-neutral-2 text-[10px] text-neutral-4 font-black">LOGO</div>
                            {item}
                         </div>
                         <ChevronRight size={14} className="text-neutral-2 group-hover:text-neutral-4 transition-colors" />
                      </div>
                    ))}
                 </div>
              </div>
            ))}
            <div className="h-20" />
         </div>
      </div>

      {/* Right Index Sidebar */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 z-30 pointer-events-auto py-4 px-1 rounded-full bg-white/40 backdrop-blur-lg border border-white/40 shadow-xl shadow-black/5">
         {['A', 'B', 'C', 'D', 'F', 'G', 'H', 'J'].map(letter => (
           <button 
             key={letter}
             onClick={() => scrollToIndex(letter)}
             className={`w-6 h-6 flex items-center justify-center text-[10px] font-black rounded-full transition-all duration-300 ${activeLetter === letter ? 'bg-brand text-white shadow-lg shadow-brand/40 scale-110' : 'text-neutral-6 hover:text-neutral-11 hover:bg-neutral-0 dark:hover:bg-neutral-2'}`}
           >
             {letter}
           </button>
         ))}
      </div>

      <AnimatePresence>
         {showBubble && activeLetter && (
           <motion.div 
             initial={{ opacity: 0, scale: 0.5, y: -20 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             exit={{ opacity: 0, scale: 0.5, y: 20 }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-brand/90 backdrop-blur-xl rounded-3xl flex items-center justify-center text-4xl font-black text-white shadow-[0_30px_60px_rgba(var(--brand-rgb),0.4)] z-50 pointer-events-none border border-white/20"
           >
              {activeLetter}
           </motion.div>
         )}
      </AnimatePresence>
    </div>
  );
};

export const GuidePreview = () => {
  const [step, setStep] = useState(0); // 0: hidden, 1: bubble style, 2: focus style

  return (
    <div className="w-full flex flex-col items-center">
      {/* Phone Frame Simulator */}
      <div className="w-[320px] h-[640px] bg-neutral-12 rounded-[44px] p-3 shadow-2xl relative border-[6px] border-neutral-12 overflow-hidden flex flex-col mx-auto">
        {/* Phone Notch/Header Areas */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-neutral-12 rounded-b-2xl z-40" />
        
        {/* App Content Area */}
        <div className="flex-1 bg-neutral-0 dark:bg-neutral-2 rounded-[32px] overflow-hidden relative flex flex-col">
          {/* Status Bar */}
          <div className="h-6 px-6 flex items-center justify-between mt-2">
            <span className="text-[10px] font-bold">12:00</span>
            <div className="flex items-center gap-1">
              <Wifi size={10} />
              <Battery size={10} />
            </div>
          </div>

          {/* Nav Bar */}
          <div className="h-12 px-4 flex items-center justify-between border-b border-neutral-1 shrink-0">
            <ChevronLeft size={20} className="text-neutral-6" />
            <h3 className="font-black text-[15px] text-neutral-11 text-center flex-1">发布货源</h3>
            <div id="guide-target-settings" className="p-1">
              <Settings size={20} className="text-neutral-6 transition-transform active:rotate-90 duration-500" />
            </div>
          </div>

          {/* Simple Form Content */}
          <div className="flex-1 overflow-y-auto no-scrollbar bg-neutral-1 p-4 space-y-4">
             {/* Step Indicator */}
             <div className="flex justify-center gap-4 py-2 opacity-50">
                <div className="flex items-center gap-1.5 text-[10px] font-bold">
                   <div className="w-5 h-5 rounded-full bg-neutral-12 text-white flex items-center justify-center">1</div>
                   <span className="text-neutral-12">货物信息</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-orange-500">
                   <div className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center">2</div>
                   <span>运费信息</span>
                </div>
             </div>

             {/* The Target Component */}
             <div id="guide-target" className="relative h-14 bg-neutral-0 dark:bg-neutral-2 rounded-2xl border-2 border-orange-500 flex overflow-hidden shadow-lg shadow-orange-500/10">
                <div className="flex-1 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center relative">
                   <div className="absolute top-0 left-0 bg-yellow-400 text-[8px] font-black px-2 py-0.5 transform -rotate-12 -translate-x-1 -translate-y-1 shadow-md">推荐</div>
                   <span className="text-sm font-black text-white">拼车模式</span>
                </div>
                <div className="flex-1 flex items-center justify-center flex-col">
                   <span className="text-[10px] font-bold text-neutral-4 line-through">¥1280.00</span>
                   <span className="text-sm font-black text-orange-500">¥899.00</span>
                </div>
             </div>

             <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                <div className="text-[10px] text-orange-900 leading-relaxed font-medium">
                   <span className="font-black mr-1">小贴士:</span> 当前为拼车模式，价格更优惠，成交速度提速 40%。 <span className="text-blue-500 font-black ml-1">查看详细指南</span>
                </div>
             </div>

             <div className="space-y-4 pt-4">
                <div className="h-4 w-28 bg-neutral-2 rounded-full" />
                <div className="grid grid-cols-2 gap-3">
                   <div className="h-12 bg-neutral-0 dark:bg-neutral-2 rounded-2xl border border-neutral-2 shadow-sm" />
                   <div className="h-12 bg-neutral-0 dark:bg-neutral-2 rounded-2xl border border-neutral-2 shadow-sm" />
                </div>
             </div>

             <div className="pt-8 space-y-4">
                <div className="h-4 w-36 bg-neutral-2 rounded-full" />
                <div className="h-28 bg-neutral-0 dark:bg-neutral-2 rounded-3xl border border-neutral-2 shadow-sm" />
             </div>
          </div>

          {/* Bottom Action */}
          <div className="p-5 border-t border-neutral-1 bg-neutral-0 dark:bg-neutral-2">
             <button 
               onClick={() => setStep(1)}
               className="w-full py-4.5 bg-brand text-white rounded-[20px] font-black text-[15px] shadow-xl shadow-brand/20 active:scale-95 active:shadow-inner transition-all duration-300"
             >
                开始引导演示
             </button>
          </div>

          {/* Guide Overlay */}
          <AnimatePresence>
            {step === 1 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-50 bg-neutral-12/60 backdrop-blur-[3px] overflow-hidden"
              >
                {/* Style 1: Floating Bubble with Line */}
                <svg className="absolute inset-0 pointer-events-none w-full h-full">
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "circOut" }}
                    d="M 80 152 L 80 230" 
                    fill="transparent" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeDasharray="4 6"
                  />
                  <motion.circle 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    cx="80" cy="152" r="6" fill="#f97316"
                  />
                  <motion.circle 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.8, opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    cx="80" cy="152" r="10" stroke="#f97316" strokeWidth="2" fill="transparent"
                  />
                </svg>

                <div className="absolute top-[230px] left-1/2 -translate-x-1/2 w-[88%] z-[51]">
                   <motion.div 
                     initial={{ y: 30, opacity: 0, scale: 0.9 }}
                     animate={{ y: 0, opacity: 1, scale: 1 }}
                     transition={{ type: "spring", stiffness: 350, damping: 30, delay: 0.3 }}
                     className="bg-neutral-12 border border-white/20 rounded-[32px] p-7 backdrop-blur-xl flex flex-col items-center gap-6 shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
                   >
                      <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-1 ring-1 ring-orange-500/30">
                         <Zap size={28} className="text-orange-500" />
                      </div>
                      <div className="text-center space-y-1">
                         <span className="text-orange-400 font-black text-[10px] uppercase tracking-[0.2em]">Guided Style 01</span>
                         <p className="text-sm font-bold text-white leading-relaxed pt-1 px-2">
                           系统已为您默认选择 <span className="text-orange-400">拼车模式</span>，更低价高效，点击右侧可灵活切换为包车。
                         </p>
                      </div>
                      
                      <button 
                        onClick={() => setStep(2)}
                        className="w-full py-4 bg-neutral-0 dark:bg-neutral-2 rounded-2xl text-neutral-12 text-sm font-black active:scale-95 transition-all shadow-xl shadow-black/20"
                      >
                         下一步
                      </button>
                   </motion.div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-50 overflow-hidden"
              >
                {/* Style 2: Focus Highlight with Cutout Mask */}
                <div className="absolute inset-0 bg-neutral-12/70 backdrop-blur-[2px]" />
                
                {/* Cutout Area (aligned with settings icon) */}
                <div className="absolute top-[36px] right-[12px] w-10 h-10 rounded-xl bg-neutral-0 dark:bg-neutral-2 ring-[100vmax] ring-neutral-12/70 shadow-[0_0_0_4px_white/30]" />
                
                <div className="absolute top-[36px] right-[12px] w-10 h-10 rounded-xl flex items-center justify-center z-[51]">
                   <Settings size={20} className="text-neutral-12 animate-spin-slow" />
                </div>

                <div className="absolute top-[100px] right-5 max-w-[220px]">
                   <motion.div 
                     initial={{ x: 30, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{ type: "spring", stiffness: 300, damping: 25 }}
                     className="bg-brand rounded-[28px] p-6 shadow-[0_40px_80px_rgba(var(--brand-rgb),0.3)] relative border border-white/20 overflow-hidden"
                   >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
                      
                      {/* Arrow point to target */}
                      <div className="absolute -top-1.5 right-4 w-3.5 h-3.5 bg-brand rotate-45 border-t border-l border-white/20" />
                      
                      <div className="flex items-center gap-2 mb-4 opacity-70">
                         <Settings size={14} className="text-white" />
                         <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] leading-none">Guided Style 02</span>
                      </div>
                      <p className="text-xs font-bold text-white leading-relaxed mb-6">
                         在这里可以快速配置 <span className="underline decoration-white/30 underline-offset-4">货源偏好</span>，包括常用的装卸货地址。
                      </p>
                      <button 
                        onClick={() => setStep(0)}
                        className="w-full py-2.5 bg-white/20 hover:bg-white/30 rounded-xl text-white text-[11px] font-black transition-all border border-white/20 backdrop-blur-md active:scale-95"
                      >
                         知道了
                      </button>
                   </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1.5 bg-neutral-12/10 rounded-full z-[100]" />
      </div>

      <div className="text-center px-10 mt-10 max-w-md">
         <p className="text-[11px] text-neutral-6 font-bold leading-relaxed">
            多维新手引导组件。通过 <span className="text-brand">Context Bubble</span> 实现精准的功能描述，利用 <span className="text-brand">Focal Mask</span> 强化视觉锁定。支持全端手势适配与多步引导逻辑，是业务教育的最佳实践。
         </p>
      </div>
    </div>
  );
};

export const LoadingPreview = () => {
  const [activeTab, setActiveTab] = useState<'standard' | 'preload' | 'dragload'>('standard');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [localLoading, setLocalLoading] = useState(false);
  const [globalLoading, setGlobalLoading] = useState(false);
  const [dragY, setDragY] = useState(0);
  const [items, setItems] = useState([1, 2, 3]);
  const [loadingMore, setLoadingMore] = useState(false);

  const triggerGlobal = () => {
    setGlobalLoading(true);
    setTimeout(() => setGlobalLoading(false), 2000);
  };

  const menu = [
    { id: 'standard', label: '常规加载', icon: Loader2 },
    { id: 'preload', label: 'PreLoad 预加载', icon: LayoutIcon },
    { id: 'dragload', label: 'DragLoad 拖拽加载', icon: RefreshCw },
  ];

  return (
    <div className="flex flex-col gap-6 py-4 bg-neutral-1 -mx-5 px-5">
      {/* Tabs */}
      <div className="flex p-1 bg-neutral-2 rounded-2xl border border-neutral-3 self-center shadow-inner">
        {menu.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id as any)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === item.id 
                ? 'bg-neutral-0 dark:bg-neutral-2 text-brand shadow-md scale-[1.02]' 
                : 'text-neutral-6 hover:text-neutral-7'
            }`}
          >
            <item.icon size={14} className={activeTab === item.id && item.id === 'dragload' ? 'animate-spin' : ''} />
            {item.label}
          </button>
        ))}
      </div>

      <div className="min-h-[460px] relative">
        <AnimatePresence mode="wait">
          {activeTab === 'standard' && (
            <motion.div 
              key="standard"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="bg-neutral-0 dark:bg-neutral-2 p-6 rounded-[32px] border border-neutral-3 shadow-sm min-h-[360px] flex flex-col items-center justify-center gap-8 relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-[radial-gradient(circle_at_50%_0%,rgba(var(--brand-rgb,52,123,255),0.1),transparent)]" />
                
                <div className="flex flex-col items-center gap-6">
                  <div className="relative">
                    <Loader2 size={48} className="text-brand animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-brand rounded-full animate-ping" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-sm font-black text-neutral-11 tracking-widest uppercase">Content Loading</span>
                    <span className="text-[10px] font-bold text-neutral-6 uppercase tracking-tighter">Please wait a moment</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-neutral-2">
                   <div className="flex flex-col items-center p-4 bg-neutral-1 rounded-2xl border border-neutral-2 group cursor-pointer hover:border-brand/40 transition-colors" onClick={() => { setLocalLoading(true); setTimeout(() => setLocalLoading(false), 2000); }}>
                      <div className="mb-2">
                        {localLoading ? (
                          <div className="flex gap-1 items-center h-6">
                             <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-brand rounded-full" />
                             <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-brand rounded-full" />
                             <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-brand rounded-full" />
                          </div>
                        ) : (
                          <MoreHorizontal className="text-neutral-4 group-hover:text-brand" size={20} />
                        )}
                      </div>
                      <span className="text-[10px] font-black text-neutral-6 uppercase tracking-widest">局部加载</span>
                   </div>
                   <div className="flex flex-col items-center p-4 bg-neutral-1 rounded-2xl border border-neutral-2 group cursor-pointer hover:border-brand/40 transition-colors" onClick={triggerGlobal}>
                      <Maximize className="text-neutral-4 mb-2 group-hover:text-brand" size={20} />
                      <span className="text-[10px] font-black text-neutral-6 uppercase tracking-widest">全屏加载</span>
                   </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'preload' && (
            <motion.div 
              key="preload"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="bg-neutral-0 dark:bg-neutral-2 p-6 rounded-[32px] border border-neutral-3 shadow-sm space-y-8 relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-neutral-11 rounded-lg flex items-center justify-center text-white text-[10px] font-black shadow-lg">G</div>
                    <div className="h-4 w-24 bg-neutral-2 rounded-full relative overflow-hidden">
                       <motion.div 
                         initial={{ x: '-100%' }}
                         animate={{ x: '100%' }}
                         transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                       />
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-neutral-1 rounded-full border border-neutral-2" />
                </div>

                <div className="space-y-6">
                  {/* Big Hero Skeleton */}
                  <div className="aspect-[16/9] bg-neutral-1 rounded-3xl relative overflow-hidden group">
                     <motion.div 
                       initial={{ x: '-100%' }}
                       animate={{ x: '200%' }}
                       transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                       className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"
                     />
                     <div className="absolute inset-0 flex flex-col justify-end p-6 gap-3">
                        <div className="h-6 w-2/3 bg-neutral-2 rounded-xl" />
                        <div className="h-3 w-1/3 bg-neutral-2/60 rounded-lg" />
                     </div>
                  </div>

                  {/* List Skeletons */}
                  <div className="grid grid-cols-1 gap-4">
                     {[1, 2].map(i => (
                       <div key={i} className="flex gap-4 p-4 border border-neutral-2 rounded-2xl">
                          <div className="w-16 h-16 bg-neutral-1 rounded-xl shrink-0 relative overflow-hidden">
                             <motion.div 
                               initial={{ x: '-100%' }}
                               animate={{ x: '200%' }}
                               transition={{ repeat: Infinity, duration: 2, ease: 'linear', delay: i * 0.2 }}
                               className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                             />
                          </div>
                          <div className="flex-1 space-y-3 py-1">
                             <div className="h-4 w-3/4 bg-neutral-2 rounded-lg" />
                             <div className="h-3 w-1/2 bg-neutral-1 rounded-md" />
                             <div className="flex gap-2">
                                <div className="h-2 w-10 bg-neutral-1 rounded-full" />
                                <div className="h-2 w-10 bg-neutral-1 rounded-full" />
                             </div>
                          </div>
                       </div>
                     ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-[10px] font-black text-neutral-4 uppercase tracking-[0.2em] mb-2">PreLoad 骨架屏加载</p>
                  <p className="text-[11px] text-neutral-6 px-10 leading-relaxed font-bold">进入页面时以色块代替文字和图片，通过极致平滑的 <span className="text-brand">Shimmer</span> 动效缓解冷启动压力。</p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'dragload' && (
            <motion.div 
              key="dragload"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex justify-center"
            >
              <div className="w-full max-w-[340px] h-[520px] bg-neutral-12 rounded-[40px] p-2.5 shadow-2xl relative border-[4px] border-neutral-12 overflow-hidden flex flex-col">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-neutral-12 rounded-b-2xl z-40" />
                <div className="flex-1 bg-neutral-0 dark:bg-neutral-2 rounded-[32px] overflow-hidden relative flex flex-col">
                  {/* Status Bar */}
                  <div className="h-10 px-6 flex items-center justify-between text-[11px] font-black text-neutral-11 z-30 shrink-0">
                    <span>9:41</span>
                    <div className="flex gap-1.5 items-center">
                      <Wifi size={12} />
                      <Battery size={12} />
                    </div>
                  </div>

                  {/* Header */}
                  <div className="h-12 border-b border-neutral-2 flex items-center justify-center font-black text-[13px] z-30 shrink-0 bg-white/80 backdrop-blur-lg">
                    DragLoad 移动端演示
                  </div>

                  {/* Scroll Area */}
                  <div className="flex-1 overflow-hidden relative bg-neutral-1">
                    {/* Pull-to-refresh Indicator */}
                    <div className="absolute top-0 left-0 right-0 h-24 flex flex-col items-center justify-center z-10 pointer-events-none">
                       <motion.div 
                         style={{ 
                           y: Math.min(dragY * 0.8 - 40, 0),
                           opacity: Math.min(dragY / 50, 1),
                           scale: Math.min(dragY / 80 + 0.5, 1)
                         }}
                         className="flex flex-col items-center gap-2"
                       >
                          <div className="w-10 h-10 bg-neutral-0 dark:bg-neutral-2 rounded-full shadow-lg border border-neutral-2 flex items-center justify-center relative">
                            {isRefreshing ? (
                              <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                                className="w-5 h-5 border-2 border-brand border-t-transparent rounded-full"
                              />
                            ) : (
                              <svg className="w-6 h-6 transform -rotate-90">
                                <circle
                                  cx="12"
                                  cy="12"
                                  r="9"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  className="text-neutral-2"
                                />
                                <motion.circle
                                  cx="12"
                                  cy="12"
                                  r="9"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.5"
                                  strokeDasharray={56.5}
                                  strokeDashoffset={56.5 - (Math.min(dragY, 80) / 80) * 56.5}
                                  className="text-brand transition-[stroke-dashoffset] duration-100"
                                  strokeLinecap="round"
                                />
                                <foreignObject width="24" height="24">
                                  <div className="flex items-center justify-center h-full">
                                    <ArrowDown 
                                      size={10} 
                                      className={`text-brand transition-all duration-300 ${dragY > 80 ? 'rotate-180 scale-125' : 'scale-100'}`} 
                                    />
                                  </div>
                                </foreignObject>
                              </svg>
                            )}
                          </div>
                          <motion.span 
                            animate={{ 
                              color: dragY > 80 ? 'var(--color-brand)' : 'var(--color-neutral-5)',
                              scale: dragY > 80 ? 1.05 : 1
                            }}
                            className="text-[9px] font-black tracking-widest uppercase transition-colors"
                          >
                            {isRefreshing ? 'Refreshing' : dragY > 80 ? 'Release to Fresh' : 'Pull to refresh'}
                          </motion.span>
                       </motion.div>
                    </div>

                    <motion.div 
                      drag="y"
                      dragConstraints={{ top: 0, bottom: 0 }}
                      dragElastic={0.6}
                      onDrag={(e, info) => {
                        if (!isRefreshing) setDragY(Math.max(0, info.offset.y));
                      }}
                      onDragEnd={(e, info) => {
                        if (info.offset.y > 80 && !isRefreshing) {
                          setIsRefreshing(true);
                          setDragY(0);
                          setTimeout(() => {
                            setItems(prev => [prev.length + 1, ...prev]);
                            setIsRefreshing(false);
                            setDragY(0);
                          }, 2000);
                        } else {
                          setDragY(0);
                        }
                      }}
                      animate={{ 
                        y: isRefreshing ? 70 : dragY,
                        transition: { type: 'spring', stiffness: 400, damping: 30 }
                      }}
                      className="h-full w-full relative z-20 overflow-y-auto no-scrollbar scroll-smooth"
                    >
                      <div className="p-4 space-y-4 min-h-full flex flex-col">
                        <AnimatePresence initial={false}>
                          {items.map((i, index) => (
                            <motion.div 
                              key={i} 
                              initial={{ opacity: 0, x: -10, scale: 0.95 }}
                              animate={{ opacity: 1, x: 0, scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="p-4 bg-neutral-0 dark:bg-neutral-2 rounded-2xl border border-neutral-3 shadow-sm flex items-center gap-4 group active:scale-[0.98] transition-transform"
                            >
                               <div className="w-12 h-12 bg-neutral-11 rounded-xl text-white flex items-center justify-center font-black group-active:rotate-3 transition-transform">
                                 {i}
                               </div>
                               <div className="flex-1">
                                  <div className="text-[13px] font-black text-neutral-12">Dynamic Data Card</div>
                                  <div className="text-[11px] text-neutral-6 font-bold mt-0.5">Updated: Just now</div>
                               </div>
                               <div className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
                            </motion.div>
                          ))}
                        </AnimatePresence>

                        {/* Load More Area */}
                        <div className="py-8 flex flex-col items-center justify-center gap-3">
                           <motion.button 
                             whileHover={{ scale: 1.05 }}
                             whileTap={{ scale: 0.95 }}
                             onClick={() => {
                               if(!loadingMore) {
                                 setLoadingMore(true);
                                 setTimeout(() => {
                                   setItems(prev => [...prev, prev.length + 1]);
                                   setLoadingMore(false);
                                 }, 1500);
                               }
                             }}
                             className="text-[10px] font-black text-neutral-6 hover:text-brand uppercase tracking-widest flex items-center gap-2 px-5 py-2.5 bg-neutral-2 rounded-full border border-neutral-3 transition-all"
                           >
                             {loadingMore ? (
                               <><Loader2 size={12} className="animate-spin text-brand" /> Processing...</>
                             ) : (
                               <><Plus size={12} /> Load Previous</>
                             )}
                           </motion.button>
                           <p className="text-[10px] text-neutral-4 font-bold tracking-tight">Viewing {items.length} records in total</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                {/* Home Indicator */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-neutral-5 rounded-full z-[100]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Global Loading Overlay (Simulator) */}
      <AnimatePresence>
        {globalLoading && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 bg-neutral-12/40 backdrop-blur-3xl z-[500] flex items-center justify-center p-8 overflow-hidden"
          >
             {/* Background particles for ambiance */}
             <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -1000],
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0]
                    }}
                    transition={{
                      duration: 4 + Math.random() * 4,
                      repeat: Infinity,
                      delay: Math.random() * 5,
                      ease: "linear"
                    }}
                    className="absolute w-2 h-2 bg-brand/20 rounded-full"
                    style={{ 
                      left: `${Math.random() * 100}%`,
                      bottom: '-10%'
                    }}
                  />
                ))}
             </div>

             <motion.div 
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 10, opacity: 0 }}
                className="bg-white/70 backdrop-blur-2xl border border-white/50 p-12 rounded-[56px] shadow-[0_80px_160px_-40px_rgba(0,0,0,0.4)] flex flex-col items-center gap-10 relative overflow-hidden max-w-sm w-full text-center"
             >
                {/* Advanced Multi-orbital Loader */}
                <div className="relative w-28 h-28">
                  {/* Outer Ring */}
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                    className="absolute inset-0 border-[3px] border-brand/10 border-t-brand/60 rounded-full"
                  />
                  {/* Middle Pulsing Ring */}
                  <motion.div 
                    animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                    className="absolute inset-4 border-[2px] border-brand/5 rounded-full"
                  />
                  {/* Inner Orbit */}
                  <motion.div 
                    animate={{ rotate: -360 }} 
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                    className="absolute inset-8 border-[4px] border-transparent border-t-brand rounded-full"
                  />
                  {/* Center Core */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      animate={{ scale: [1, 0.8, 1], rotate: [0, 45, 0] }}
                      transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                      className="w-12 h-12 bg-neutral-0 dark:bg-neutral-2 rounded-2xl shadow-lg border border-neutral-1 flex items-center justify-center text-brand"
                    >
                      <Zap size={22} fill="currentColor" className="drop-shadow-[0_0_8px_rgba(var(--brand-rgb),0.5)]" />
                    </motion.div>
                  </div>
                </div>

                <div className="space-y-3">
                   <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-black text-neutral-11 tracking-tighter uppercase"
                   >
                     Optimizing System
                   </motion.h2>
                   <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center gap-1"
                   >
                      <p className="text-[14px] text-neutral-6 font-bold leading-tight">Securing high-speed connection...</p>
                      <div className="h-1 w-24 bg-neutral-1 rounded-full mt-2 relative overflow-hidden">
                         <motion.div 
                           animate={{ x: ['-100%', '100%'] }}
                           transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                           className="absolute inset-y-0 w-1/2 bg-brand rounded-full"
                         />
                      </div>
                   </motion.div>
                </div>

                <motion.button 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  onClick={() => setGlobalLoading(false)}
                  className="px-8 py-3 bg-neutral-12 hover:bg-black text-white text-[11px] font-black rounded-2xl transition-all uppercase tracking-widest shadow-xl active:scale-95"
                >
                  Discard Mission
                </motion.button>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const PopupPreview = () => {
  const [popupType, setPopupType] = useState<'center' | 'bottom' | 'top' | 'left' | 'right' | null>(null);
  
  const variants = {
    center: {
      initial: { scale: 0.9, opacity: 0, y: 30 },
      animate: { scale: 1, opacity: 1, y: 0 },
      exit: { scale: 0.9, opacity: 0, y: 30 },
      className: "relative bg-neutral-0 dark:bg-neutral-2 w-[88%] max-w-[340px] rounded-[32px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] p-7 text-center border border-neutral-2 dark:border-neutral-4"
    },
    bottom: {
      initial: { y: '100%' },
      animate: { y: 0 },
      exit: { y: '100%' },
      className: "relative bg-neutral-0 dark:bg-neutral-2 w-full rounded-t-[40px] shadow-[0_-24px_48px_-12px_rgba(0,0,0,0.15)] px-6 pt-2 pb-12 mt-auto border-t border-neutral-2 dark:border-neutral-4",
      transition: { type: "spring", damping: 32, stiffness: 350 }
    },
    top: {
      initial: { y: '-100%' },
      animate: { y: 0 },
      exit: { y: '-100%' },
      className: "relative bg-neutral-0 dark:bg-neutral-2 w-full rounded-b-[40px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.15)] px-6 pt-12 pb-6 mb-auto border-b border-neutral-2 dark:border-neutral-4",
      transition: { type: "spring", damping: 32, stiffness: 350 }
    },
    left: {
      initial: { x: '-100%' },
      animate: { x: 0 },
      exit: { x: '-100%' },
      className: "relative bg-neutral-0 dark:bg-neutral-2 h-full w-[75%] max-w-[300px] shadow-[24px_0_48px_-12px_rgba(0,0,0,0.15)] p-6 mr-auto border-r border-neutral-2 dark:border-neutral-4",
      transition: { type: "spring", damping: 32, stiffness: 350 }
    },
    right: {
      initial: { x: '100%' },
      animate: { x: 0 },
      exit: { x: '100%' },
      className: "relative bg-neutral-0 dark:bg-neutral-2 h-full w-[75%] max-w-[300px] shadow-[-24px_0_48px_-12px_rgba(0,0,0,0.15)] p-6 ml-auto border-l border-neutral-2 dark:border-neutral-4",
      transition: { type: "spring", damping: 32, stiffness: 350 }
    }
  };

  const close = () => setPopupType(null);

  return (
    <div className="w-full h-full flex flex-col relative bg-neutral-1 dark:bg-neutral-3 overflow-hidden select-none">
       {/* UI Mockup Background */}
       <div className={`flex-1 flex items-center justify-center relative transition-all duration-700 rounded-[40px] ease-in-out ${popupType ? 'scale-[0.92] brightness-50 rounded-[48px]' : ''}`}>
          <div className="w-full max-w-sm space-y-5 pointer-events-none p-6">
             <div className="h-44 bg-neutral-0 dark:bg-neutral-2 rounded-[32px] border border-neutral-2 dark:border-neutral-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)]" />
             <div className="flex gap-4 items-center">
                <div className="w-16 h-16 bg-neutral-0 dark:bg-neutral-2 rounded-[24px] border border-neutral-2 dark:border-neutral-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)]" />
                <div className="flex-1 space-y-3">
                   <div className="h-5 bg-neutral-2 dark:bg-neutral-4 w-1/2 rounded-full" />
                   <div className="h-3 bg-neutral-2 dark:bg-neutral-4 w-full rounded-full" />
                   <div className="h-3 bg-neutral-2 dark:bg-neutral-4 w-2/3 rounded-full" />
                </div>
             </div>
             <div className="grid grid-cols-2 gap-4">
                <div className="h-32 bg-neutral-0 dark:bg-neutral-2 rounded-[28px] border border-neutral-2 dark:border-neutral-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)]" />
                <div className="h-32 bg-neutral-0 dark:bg-neutral-2 rounded-[28px] border border-neutral-2 dark:border-neutral-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)]" />
             </div>
             <div className="h-40 bg-neutral-0 dark:bg-neutral-2 rounded-[32px] border border-neutral-2 dark:border-neutral-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)]" />
          </div>
       </div>

       {/* Full Screen Overlay System */}
       <AnimatePresence>
          {popupType && (
            <div className="absolute inset-0 z-[50] flex overflow-hidden rounded-[32px]">
               <motion.div 
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }} 
                 exit={{ opacity: 0 }} 
                 className="absolute inset-0 bg-neutral-12/60 backdrop-blur-[8px]" 
                 onClick={close} 
               />
               
               <div className="flex w-full h-full pointer-events-none items-center justify-center relative">
                 <motion.div 
                   key={popupType}
                   initial={variants[popupType].initial}
                   animate={variants[popupType].animate}
                   exit={variants[popupType].exit}
                   transition={variants[popupType].transition}
                   className={`${variants[popupType].className} pointer-events-auto`}
                 >
                    {popupType === 'bottom' && (
                      <div className="w-12 h-1.5 bg-neutral-2 dark:bg-neutral-4 rounded-full mx-auto mb-8 opacity-50" />
                    )}
                    
                    {popupType === 'center' && (
                      <div className="flex flex-col items-center">
                        <div className="w-20 h-20 bg-brand/10 text-brand rounded-[28px] items-center justify-center flex mb-6 rotate-3">
                           <Sparkles size={40} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-black mb-3 text-neutral-12 tracking-tight">智能排版预览</h3>
                        <p className="text-[15px] text-neutral-6 dark:text-neutral-4 mb-8 leading-relaxed px-2 font-medium">
                           我们已针对您的设备优化了间距与动效曲线。当前遮罩层已实现全屏锁定，增强沉浸式体验。
                        </p>
                        <div className="flex flex-col gap-3 w-full">
                           <button onClick={close} className="w-full py-4.5 bg-brand text-white rounded-2xl font-black text-[16px] shadow-[0_20px_40px_-10px_rgba(var(--brand-rgb,52,123,255),0.3)] active:scale-95 transition-all">确认开启</button>
                           <button onClick={close} className="w-full py-3 text-neutral-4 dark:text-neutral-5 font-bold text-[14px] hover:text-neutral-6 dark:hover:text-neutral-3 transition-colors">取消</button>
                        </div>
                      </div>
                    )}

                    {popupType === 'bottom' && (
                      <>
                        <div className="flex justify-between items-center mb-8">
                           <h3 className="text-xl font-black text-neutral-12 tracking-tight">快速功能</h3>
                           <button onClick={close} className="w-10 h-10 bg-neutral-1 dark:bg-neutral-3 rounded-full flex items-center justify-center text-neutral-4 dark:text-neutral-3 hover:text-neutral-11 active:scale-90 transition-transform border border-neutral-2 dark:border-neutral-4">
                              <X size={20} />
                           </button>
                        </div>
                        <div className="grid grid-cols-4 gap-6 mb-10">
                           {[
                             { icon: ImageIcon, label: '保存', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400' },
                             { icon: Sparkles, label: '生成', color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400' },
                             { icon: Zap, label: '加速', color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400' },
                             { icon: Settings2, label: '偏好', color: 'bg-neutral-500/10 text-neutral-600 dark:text-neutral-400' }
                           ].map((item, i) => (
                             <button key={i} className="flex flex-col items-center gap-3 transition-transform active:scale-90">
                                <div className={`w-16 h-16 ${item.color} rounded-[22px] flex items-center justify-center shadow-sm`}>
                                   <item.icon size={26} strokeWidth={2} />
                                </div>
                                <span className="text-[12px] font-bold text-neutral-6 dark:text-neutral-4">{item.label}</span>
                             </button>
                           ))}
                        </div>
                        <button onClick={close} className="w-full py-4.5 bg-neutral-1 dark:bg-neutral-3 text-neutral-11 dark:text-neutral-1 rounded-2xl font-black text-[16px] active:bg-neutral-2 dark:active:bg-neutral-4 transition-colors">取消操作</button>
                      </>
                    )}

                    {(popupType === 'left' || popupType === 'right') && (
                      <div className="flex flex-col h-full select-none">
                         <div className="flex justify-between items-center mb-10">
                            <h3 className="text-xl font-black text-neutral-12 tracking-tight">侧栏菜单</h3>
                            <button onClick={close} className="text-neutral-4 dark:text-neutral-3 hover:text-neutral-11"><X size={24}/></button>
                         </div>
                         <div className="space-y-2 flex-1 scrollbar-hide overflow-y-auto">
                            {['个人资料', '我的钱包', '消息通知', '安全隐私', '通用设置'].map((item, idx) => (
                              <button key={item} className="w-full py-4 px-4 text-left text-[15px] font-black text-neutral-8 rounded-2xl hover:bg-neutral-1 dark:hover:bg-neutral-3 transition-all flex justify-between items-center group active:scale-[0.98]">
                                 <span className="group-hover:text-neutral-12 dark:group-hover:text-neutral-1 transition-colors">{item}</span>
                                 <ChevronRight size={18} className="text-neutral-4 group-hover:text-brand transition-all transform group-hover:translate-x-1" />
                              </button>
                            ))}
                         </div>
                         <div className="mt-auto pt-6 border-t border-neutral-1 dark:border-neutral-4 space-y-5">
                            <div className="p-5 bg-neutral-1 dark:bg-neutral-3 rounded-2xl border border-neutral-2 dark:border-neutral-4 text-[12px] text-neutral-6 dark:text-neutral-4 leading-relaxed font-medium">
                               全屏覆盖方案确保了侧边栏在弹出时能完全屏蔽底层干扰，提升操作聚焦度。
                            </div>
                            <button onClick={close} className="w-full py-4 bg-error/10 text-error rounded-2xl font-black text-[15px] active:bg-error/20 transition-all">安全退出</button>
                         </div>
                      </div>
                    )}

                    {popupType === 'top' && (
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-success/10 text-success rounded-xl flex items-center justify-center">
                               <Check size={24} strokeWidth={2.5}/>
                            </div>
                            <div>
                               <h4 className="text-[16px] font-black text-neutral-12">设置保存成功</h4>
                               <p className="text-[13px] text-neutral-6 dark:text-neutral-4 font-medium">新的全局偏好已经即时生效</p>
                            </div>
                         </div>
                         <button onClick={close} className="px-5 py-2.5 bg-neutral-12 dark:bg-neutral-1 text-neutral-1 dark:text-neutral-12 rounded-xl text-[13px] font-black shadow-lg">知道了</button>
                      </div>
                    )}
                 </motion.div>
               </div>
            </div>
          )}
       </AnimatePresence>

       {/* Controller (Central Vertical Stack) */}
       {!popupType && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <div className="flex flex-col gap-4 w-[240px] pointer-events-auto p-4.5 rounded-[40px] bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/5 shadow-2xl">
               <button onClick={() => setPopupType('top')} className="py-4 bg-neutral-12 dark:bg-neutral-1 text-neutral-1 dark:text-neutral-12 rounded-2xl text-[14px] font-black active:scale-95 transition-all shadow-xl hover:shadow-neutral-12/20 flex items-center justify-center gap-2 border border-neutral-3/10">
                  顶部提示层 Dropdown
               </button>
               <button onClick={() => setPopupType('center')} className="py-4 bg-brand text-white rounded-2xl text-[14px] font-black active:scale-95 transition-all shadow-xl hover:shadow-brand/20 flex items-center justify-center gap-2">
                  中心弹出模态 Dialog
               </button>
               <button onClick={() => setPopupType('bottom')} className="py-4 bg-neutral-12 dark:bg-neutral-1 text-neutral-1 dark:text-neutral-12 rounded-2xl text-[14px] font-black active:scale-95 transition-all shadow-xl hover:shadow-neutral-12/20 flex items-center justify-center gap-2 border border-neutral-3/10">
                  底部功能区 Sheets
               </button>
               <button onClick={() => setPopupType('left')} className="py-4 bg-neutral-0 dark:bg-neutral-2 border border-neutral-2 dark:border-neutral-4 text-neutral-11 rounded-2xl text-[14px] font-black active:scale-95 transition-all shadow-sm flex items-center justify-center gap-2">
                  左侧导航抽屉 Drawer
               </button>
               <button onClick={() => setPopupType('right')} className="py-4 bg-neutral-0 dark:bg-neutral-2 border border-neutral-2 dark:border-neutral-4 text-neutral-11 rounded-2xl text-[14px] font-black active:scale-95 transition-all shadow-sm flex items-center justify-center gap-2">
                  右侧属性筛选 Filter
               </button>
            </div>
          </div>
       )}
    </div>
  );
};

export const ToastPreview = () => {
  const [toast, setToast] = useState<{ type: 'success' | 'warning' | 'text' | 'loading' | 'error', show: boolean, message: string }>({ 
    type: 'success', 
    show: false,
    message: ''
  });
  
  const showToast = (type: 'success' | 'warning' | 'text' | 'loading' | 'error', message?: string) => {
    const defaultMessages = {
      success: '保存成功',
      warning: '正在尝试重连...',
      text: '已为您开启自动保存',
      loading: '正在上传资源...',
      error: '文件解析失败'
    };

    setToast({ type, show: true, message: message || defaultMessages[type] });
    
    if (type !== 'loading') {
       setTimeout(() => setToast(prev => ({ ...prev, show: false })), 2000);
    } else {
       // Simulate loading completion
       setTimeout(() => {
         setToast({ type: 'success', show: true, message: '完成同步' });
         setTimeout(() => setToast(prev => ({ ...prev, show: false })), 1500);
       }, 3000);
    }
  };
  
  return (
    <div className="h-full flex flex-col relative bg-neutral-1 -mx-5 px-5 overflow-hidden">
       {/* UI Content Mockup */}
       <div className={`flex-1 flex flex-col transition-all duration-500 pt-16 ${toast.show ? 'blur-[1px] brightness-95' : ''}`}>
          <div className="px-6 space-y-6">
             <div className="flex items-center justify-between">
                <div className="space-y-1">
                   <div className="h-6 bg-neutral-2 w-32 rounded-lg" />
                   <div className="h-3 bg-neutral-1 w-24 rounded-full" />
                </div>
                <div className="w-10 h-10 bg-neutral-2 rounded-full" />
             </div>
             
             <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="aspect-[4/3] bg-neutral-0 dark:bg-neutral-2 rounded-2xl border border-neutral-2 shadow-[0_4px_12px_rgba(0,0,0,0.02)] p-4 flex flex-col justify-between">
                     <div className="w-8 h-8 bg-neutral-1 rounded-lg" />
                     <div className="h-3 bg-neutral-1 w-full rounded-full" />
                  </div>
                ))}
             </div>

             <div className="h-32 bg-neutral-0 dark:bg-neutral-2 rounded-3xl border border-neutral-2 shadow-sm p-6 space-y-3">
                <div className="h-4 bg-neutral-1 w-3/4 rounded-full" />
                <div className="h-4 bg-neutral-1 w-1/2 rounded-full" />
                <div className="h-2 bg-neutral-1/50 w-full rounded-full mt-4" />
             </div>
          </div>
       </div>

       {/* Toast Overlay System */}
       <AnimatePresence>
          {toast.show && (
            <div className="absolute inset-0 flex items-center justify-center p-6 z-50 pointer-events-none">
               <motion.div 
                  key={`${toast.type}-${toast.message}`}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }} 
                  animate={{ opacity: 1, scale: 1, y: 0 }} 
                  exit={{ opacity: 0, scale: 0.8, y: -10 }}
                  transition={{ type: "spring", damping: 25, stiffness: 400 }}
                  className="pointer-events-auto"
               >
                  {/* Icon Based Toast (Success/Error/Loading) */}
                  {(toast.type === 'success' || toast.type === 'error' || toast.type === 'loading') && (
                    <div className="bg-neutral-12/90 border border-white/10 backdrop-blur-2xl px-10 py-8 rounded-[40px] flex flex-col items-center gap-4 shadow-[0_24px_48px_rgba(0,0,0,0.3)] min-w-[150px]">
                        <div className="relative">
                          {toast.type === 'success' && (
                            <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="w-12 h-12 bg-success rounded-full flex items-center justify-center text-white shadow-lg shadow-success/30">
                               <Check size={28} strokeWidth={3} />
                            </motion.div>
                          )}
                          {toast.type === 'error' && (
                            <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="w-12 h-12 bg-error rounded-full flex items-center justify-center text-white shadow-lg shadow-error/30">
                               <X size={28} strokeWidth={3} />
                            </motion.div>
                          )}
                          {toast.type === 'loading' && (
                            <div className="w-12 h-12 rounded-full flex items-center justify-center">
                               <Loader2 size={36} className="text-white animate-spin" />
                            </div>
                          )}
                        </div>
                        <span className="text-white text-[16px] font-black tracking-tight whitespace-nowrap">{toast.message}</span>
                    </div>
                  )}

                  {/* Horizontal Bar Toast (Text/Warning) */}
                  {(toast.type === 'text' || toast.type === 'warning') && (
                    <div className={`bg-neutral-12/95 backdrop-blur-2xl border border-white/10 px-6 py-4 rounded-full flex items-center gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.25)] ${toast.type === 'warning' ? 'ring-2 ring-warning/30' : ''}`}>
                       {toast.type === 'warning' && <CircleAlert size={20} className="text-warning" />}
                       <span className="text-white text-[14px] font-bold tracking-tight">{toast.message}</span>
                    </div>
                  )}
               </motion.div>
            </div>
          )}
       </AnimatePresence>

       {/* Control Dock (At bottom) */}
       <div className="sticky bottom-0 left-0 right-0 p-6 bg-white/60 backdrop-blur-3xl border-t border-neutral-2/50 z-40">
          <div className="flex flex-col gap-3">
             <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => showToast('success')} 
                  className="py-4 bg-success text-white rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                  <CircleCheck size={18} />
                  <span className="text-[13px] font-black">成功操作</span>
                </button>
                <button 
                  onClick={() => showToast('error')} 
                  className="py-4 bg-error text-white rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                  <CircleAlert size={18} />
                  <span className="text-[13px] font-black">失败报错</span>
                </button>
             </div>
             <div className="grid grid-cols-3 gap-2">
                <button 
                  onClick={() => showToast('loading')} 
                  className="py-3 bg-brand text-white rounded-xl flex flex-col items-center gap-1 active:scale-95 transition-transform"
                >
                  <RefreshCw size={14} />
                  <span className="text-[10px] font-black">加载过程</span>
                </button>
                <button 
                  onClick={() => showToast('warning')} 
                  className="py-3 bg-neutral-12 text-white rounded-xl flex flex-col items-center gap-1 active:scale-95 transition-transform"
                >
                  <Bell size={14} />
                  <span className="text-[10px] font-black">警告通知</span>
                </button>
                <button 
                  onClick={() => showToast('text')} 
                  className="py-3 bg-neutral-0 dark:bg-neutral-2 border border-neutral-2 text-neutral-11 rounded-xl flex flex-col items-center gap-1 active:scale-95 transition-transform"
                >
                  <MessageSquare size={14} />
                  <span className="text-[10px] font-black">飘字提示</span>
                </button>
             </div>
          </div>
       </div>
    </div>
  );
};

export const DialogPreview = () => {
  const [dialogType, setDialogType] = useState<'destructive' | 'confirm' | null>(null);
  
  return (
    <div className="h-full flex flex-col gap-4 items-center justify-center p-6 bg-neutral-1 -mx-5 px-5">
       <div className="flex flex-col gap-4 w-full max-w-xs">
          <button 
            onClick={() => setDialogType('confirm')} 
            className="w-full py-4 bg-brand text-white g-radius shadow-lg shadow-brand/20 active:scale-95 transition-all font-black text-[15px] flex items-center justify-center gap-2"
          >
             唤起普通对话框
          </button>
          <button 
            onClick={() => setDialogType('destructive')} 
            className="w-full py-4 bg-neutral-0 dark:bg-neutral-2 border border-neutral-3 text-error g-radius shadow-sm active:scale-95 transition-all font-black text-[15px] flex items-center justify-center gap-2"
          >
             唤起警告对话框
          </button>
       </div>
       
       <AnimatePresence>
          {dialogType && (
            <div className="absolute inset-0 z-[2000] flex items-center justify-center p-6 overflow-hidden">
               <motion.div 
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }} 
                 exit={{ opacity: 0 }} 
                 className="absolute inset-0 bg-neutral-12/60 backdrop-blur-[8px]" 
                 onClick={() => setDialogType(null)} 
               />
               
               <motion.div 
                 key={dialogType}
                 initial={{ scale: 0.9, opacity: 0, y: 20 }} 
                 animate={{ scale: 1, opacity: 1, y: 0 }} 
                 exit={{ scale: 0.9, opacity: 0, y: 20 }} 
                 transition={{ type: "spring", damping: 25, stiffness: 400 }}
                 className="relative bg-neutral-0 dark:bg-neutral-2 w-full max-w-[340px] g-radius-card shadow-[0_32px_64px_-16px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col"
               >
                  <div className="p-8 text-center">
                     <div className={`w-16 h-16 g-radius-inner flex items-center justify-center mx-auto mb-6 ${dialogType === 'destructive' ? 'bg-error/10 text-error' : 'bg-brand/10 text-brand'}`}>
                        {dialogType === 'destructive' ? <CircleAlert size={32} /> : <CircleCheck size={32} />}
                     </div>
                     <h3 className="text-2xl font-black text-neutral-12 mb-3 tracking-tight">
                        {dialogType === 'destructive' ? '删除草稿提示' : '保存修改提示'}
                     </h3>
                     <p className="text-[15px] text-neutral-6 leading-relaxed font-medium">
                        {dialogType === 'destructive' 
                          ? '删除后内容将同步从服务器移除且无法找回，请再次确认是否执行此操作？' 
                          : '您的个人资料已根据最新版本进行了修订，建议立即保存以防止数据丢失。'}
                     </p>
                  </div>
                  
                  <div className="px-6 pb-8 flex flex-col gap-3">
                     <button 
                       onClick={() => setDialogType(null)} 
                       className={`w-full py-4.5 g-radius font-black text-[16px] shadow-xl transition-all active:scale-95 ${dialogType === 'destructive' ? 'bg-error text-white shadow-error/20' : 'bg-brand text-white shadow-brand/20'}`}
                     >
                        {dialogType === 'destructive' ? '确定删除' : '立即保存'}
                     </button>
                     <button 
                       onClick={() => setDialogType(null)} 
                       className="w-full py-4 text-[14px] font-bold text-neutral-4 hover:text-neutral-6 transition-colors"
                     >
                        取消
                     </button>
                  </div>
               </motion.div>
            </div>
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
       <div className="w-full max-w-sm mx-auto bg-neutral-0 dark:bg-neutral-2 rounded-2xl shadow-sm border border-neutral-3 overflow-hidden flex flex-col h-[300px]">
          {/* Header/Nav bar mockup */}
          <div className="h-14 border-b border-neutral-2 flex items-center px-4 justify-between relative z-20 bg-neutral-0 dark:bg-neutral-2">
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
                      className="absolute top-14 left-0 right-0 bg-neutral-0 dark:bg-neutral-2 shadow-[0_12px_24px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col z-20 rounded-b-xl"
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
                <div className="h-20 bg-neutral-0 dark:bg-neutral-2 rounded-xl shadow-sm border border-neutral-2" />
                <div className="h-20 bg-neutral-0 dark:bg-neutral-2 rounded-xl shadow-sm border border-neutral-2" />
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
  const [messages, setMessages] = useState<{id: number, text: string, type: 'info'|'success'|'error'|'warning', closable?: boolean}[]>([]);
  let idCounter = React.useRef(0);

  const removeMessage = (id: number) => {
    setMessages(prev => prev.filter(m => m.id !== id));
  };

  const addMessage = (type: 'info' | 'success' | 'error' | 'warning', text: string, closable: boolean = false) => {
    const id = idCounter.current++;
    setMessages(prev => [...prev, { id, text, type, closable }]);
    setTimeout(() => {
      removeMessage(id);
    }, closable ? 6000 : 4000);
  };

  const defaultMessages = {
    info: '系统已成功更新到最新版本',
    success: '已为您开启自动保存功能',
    warning: '当前账户空间即将不足',
    error: '网络连接超时，请重试',
    closable: '系统检测到有可用更新，点击右侧关闭按钮可以快速退出当前提示'
  };

  return (
    <div className="h-full flex flex-col relative overflow-hidden bg-neutral-1 -mx-5 px-5">
       {/* Background Content Mockup */}
       <div className={`flex-1 transition-all duration-700 pt-16 ${messages.length > 0 ? 'blur-[1px] brightness-95' : ''}`}>
          <div className="flex items-center justify-between mb-8">
             <div className="space-y-1">
                <div className="h-2.5 bg-neutral-2 w-20 rounded-full" />
                <div className="h-6 bg-neutral-2 w-48 rounded-xl" />
             </div>
             <div className="w-12 h-12 bg-neutral-2 rounded-2xl" />
          </div>
          
          <div className="space-y-6">
             <div className="h-40 bg-neutral-0 dark:bg-neutral-2 rounded-[32px] border border-neutral-0 dark:border-neutral-3 shadow-[0_8px_30px_rgba(0,0,0,0.04)]" />
             <div className="grid grid-cols-2 gap-4">
                <div className="h-32 bg-neutral-0 dark:bg-neutral-2 rounded-[24px] border border-neutral-0 dark:border-neutral-3 shadow-[0_8px_30px_rgba(0,0,0,0.04)]" />
                <div className="h-32 bg-neutral-0 dark:bg-neutral-2 rounded-[24px] border border-neutral-0 dark:border-neutral-3 shadow-[0_8px_30px_rgba(0,0,0,0.04)]" />
             </div>
             <div className="h-40 bg-neutral-0 dark:bg-neutral-2 rounded-[32px] border border-neutral-0 dark:border-neutral-3 shadow-[0_8px_30px_rgba(0,0,0,0.04)]" />
          </div>
       </div>
       
       {/* Message Notification Container - Floating from top */}
       <div className="absolute top-8 left-0 right-0 px-4 flex flex-col items-center gap-3 z-50 pointer-events-none">
          <AnimatePresence mode="popLayout">
             {messages.map((m) => (
               <motion.div 
                 key={m.id}
                 initial={{ opacity: 0, y: -40, scale: 0.8, filter: 'blur(10px)' }}
                 animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                 exit={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                 layout
                 transition={{ type: 'spring', damping: 25, stiffness: 450 }}
                 className={`flex items-center gap-3 px-5 py-4 rounded-[28px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] border pointer-events-auto backdrop-blur-xl w-full max-w-[340px] bg-neutral-0 dark:bg-neutral-2 text-[#333333] ${
                    m.type === 'info' ? 'border-neutral-1' : 
                    m.type === 'success' ? 'border-success/10' : 
                    m.type === 'warning' ? 'border-warning/10' : 
                    'border-error/10'
                 }`}
               >
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    m.type === 'info' ? 'bg-brand/10 text-brand' : 
                    m.type === 'success' ? 'bg-success/10 text-success' : 
                    m.type === 'warning' ? 'bg-warning/10 text-warning' : 
                    'bg-error/10 text-error'
                 }`}>
                   {m.type === 'info' && <Info size={18} strokeWidth={2.5}/>}
                   {m.type === 'success' && <CircleCheck size={18} strokeWidth={2.5}/>}
                   {m.type === 'warning' && <AlertCircle size={18} strokeWidth={2.5}/>}
                   {m.type === 'error' && <CircleAlert size={18} strokeWidth={2.5}/>}
                 </div>
                 <span className="text-[14px] font-black tracking-tight flex-1 line-clamp-2">{m.text}</span>
                  {m.closable && (
                    <button 
                      onClick={() => removeMessage(m.id)}
                      className="pl-3 border-l border-neutral-1 text-[13px] font-bold text-neutral-4 hover:text-brand transition-colors whitespace-nowrap active:scale-95 pointer-events-auto"
                    >
                      关闭
                    </button>
                  )}
               </motion.div>
             ))}
          </AnimatePresence>
       </div>

       {/* Floating Control Dock (Bottom Center) */}
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[340px] p-6 z-50">
          <div className="bg-white/80 backdrop-blur-3xl p-5 rounded-[40px] border border-neutral-2/50 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]">
             <div className="grid grid-cols-2 gap-3 mb-3">
                <button 
                  onClick={() => addMessage('success', defaultMessages.success)} 
                  className="py-4.5 bg-success text-white rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-all text-xs font-black shadow-xl shadow-success/20"
                >
                   成功反馈
                </button>
                <button 
                  onClick={() => addMessage('error', defaultMessages.error)} 
                  className="py-4.5 bg-error text-white rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-all text-xs font-black shadow-xl shadow-error/20"
                >
                   错误提醒
                </button>
             </div>
             <div className="grid grid-cols-3 gap-2">
                <button 
                  onClick={() => addMessage('info', defaultMessages.info)} 
                  className="py-3.5 bg-neutral-12 text-white rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-all text-[11px] font-black"
                >
                   通知消息
                </button>
                <button 
                  onClick={() => addMessage('warning', defaultMessages.warning)} 
                  className="py-3.5 bg-neutral-0 dark:bg-neutral-2 border border-neutral-2 text-neutral-11 rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-all text-[11px] font-black"
                >
                   警告风险
                </button>
                <button 
                  onClick={() => addMessage('info', defaultMessages.closable, true)} 
                  className="py-3.5 bg-brand text-white rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-all text-[11px] font-black shadow-lg shadow-brand/10"
                >
                   带关闭项
                </button>
             </div>
          </div>
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
          
          <div className="bg-neutral-0 dark:bg-neutral-2 rounded-xl divide-y divide-neutral-2 overflow-hidden shadow-sm border border-neutral-3">
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
                         <div 
                            className="w-[70px] bg-neutral-6 flex items-center justify-center text-white cursor-pointer hover:bg-neutral-7 transition-colors"
                            onClick={(e) => { e.stopPropagation(); setSwipedIndex(null); }}
                         >
                            <span className="text-[13px] font-bold tracking-widest text-center">找相似</span>
                         </div>
                         <div 
                            className="w-[70px] bg-warning flex items-center justify-center text-white cursor-pointer hover:bg-orange-500 transition-colors"
                            onClick={(e) => { e.stopPropagation(); setSwipedIndex(null); }}
                         >
                            <span className="text-[13px] font-bold tracking-widest text-center">收藏</span>
                         </div>
                         <div 
                            className="w-[70px] bg-error flex items-center justify-center text-white cursor-pointer hover:bg-red-600 transition-colors"
                            onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}
                         >
                            <span className="text-[13px] font-bold tracking-widest text-center">删除</span>
                         </div>
                      </div>
                      
                      {/* Foreground Cell */}
                      <motion.div 
                         className="relative bg-neutral-0 dark:bg-neutral-2 px-4 py-4 cursor-grab active:cursor-grabbing"
                         initial={false}
                         animate={{ x: swipedIndex === idx ? -210 : 0 }}
                         transition={{ type: "spring", stiffness: 400, damping: 30 }}
                         drag="x"
                         dragConstraints={{ left: -210, right: 0 }}
                         dragElastic={0.1}
                         onDragEnd={(e, info) => {
                            if (info.offset.x < -60) setSwipedIndex(idx);
                            else setSwipedIndex(null);
                         }}
                      >
                         <div className="flex">
                            <div className="w-12 h-12 rounded-full bg-neutral-2 text-neutral-6 border border-neutral-3 flex items-center justify-center mr-4 relative shrink-0">
                               <Bell size={20} />
                               {item.unread && <div className="absolute top-0 right-0 w-3.5 h-3.5 border-[3px] border-neutral-0 dark:border-neutral-3 bg-error rounded-full" />}
                            </div>
                            <div className="flex-1 min-w-0 flex flex-col justify-center">
                               <div className="flex justify-between items-center mb-1">
                                  <h4 className="text-[15px] font-bold text-neutral-12 truncate pr-2">{item.title}</h4>
                                  <span className="text-[11px] text-neutral-6 font-medium shrink-0">{item.time}</span>
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
export const FabPreview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeToast, setActiveToast] = useState<string | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const actions = [
    { id: 'scan', icon: Sparkles, label: '扫一扫', color: 'bg-brand' },
    { id: 'search', icon: SearchIcon, label: '搜索', color: 'bg-indigo-600' },
    { id: 'edit', icon: Edit, label: '发布内容', color: 'bg-success' },
    { id: 'stats', icon: LayoutIcon, label: '查看报表', color: 'bg-amber-500' },
  ];

  const handleAction = (label: string) => {
    setActiveToast(`正在打开 ${label}...`);
    setIsOpen(false);
    setTimeout(() => setActiveToast(null), 2000);
  };

  return (
    <div className="relative h-[650px] w-full bg-neutral-2 overflow-hidden flex flex-col group/fab">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>

      {/* Control Panel in Preview */}
      <div className="absolute top-4 left-4 right-4 z-20 flex gap-2">
        <button 
          onClick={() => { setIsScrolling(!isScrolling); if(!isScrolling) setIsOpen(false); }}
          className={`flex-1 py-2 px-3 rounded-xl text-[10px] font-bold transition-all border ${isScrolling ? 'bg-neutral-11 text-white border-neutral-11' : 'bg-neutral-0 dark:bg-neutral-2 text-neutral-8 border-neutral-3'}`}
        >
          {isScrolling ? '模拟停止中 (已锁定收起)' : '模拟滑动中 (自动收起)'}
        </button>
      </div>

      {/* Page Content Mockup */}
      <div className="flex-1 space-y-6 px-4 pt-16 overflow-y-auto scrollbar-hide">
        <div className="h-44 bg-neutral-0 dark:bg-neutral-2 rounded-3xl border border-neutral-3 shadow-md p-6 flex flex-col justify-between relative overflow-hidden group/card">
           <div className="absolute top-0 right-0 p-8 opacity-[0.05] group-hover/card:scale-110 transition-transform">
             <Zap size={100} />
           </div>
           <div className="flex justify-between items-start relative z-10">
             <div className="space-y-1">
               <h3 className="text-xl font-black text-neutral-11 tracking-tighter italic">BUSINESS DASHBOARD</h3>
               <p className="text-[11px] text-neutral-6 font-bold uppercase tracking-widest">Real-time Performance</p>
             </div>
             <div className="w-11 h-11 bg-brand text-white rounded-2xl flex items-center justify-center shadow-lg shadow-brand/20">
               <Zap size={22} className="fill-white" />
             </div>
           </div>
           <div className="space-y-3 relative z-10">
             <div className="flex justify-between items-end">
               <span className="text-[11px] font-black text-neutral-8 uppercase">Conversion Rate</span>
               <span className="text-2xl font-black text-brand tracking-tighter">84.2%</span>
             </div>
             <div className="h-2.5 bg-neutral-1 rounded-full overflow-hidden shadow-inner">
                <motion.div initial={{ width: 0 }} animate={{ width: '84%' }} className="h-full bg-brand rounded-full shadow-[0_0_8px_rgba(var(--brand-rgb,52,123,255),0.6)]" />
             </div>
           </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="h-36 bg-neutral-0 dark:bg-neutral-2 rounded-2xl border border-neutral-3 shadow-sm p-4 flex flex-col justify-between group/subcard hover:shadow-xl transition-shadow">
              <div className="flex justify-between">
                <div className="w-10 h-10 bg-neutral-1 rounded-xl flex items-center justify-center text-neutral-4 group-hover/subcard:bg-brand-light group-hover/subcard:text-brand transition-colors">
                  <ImageIcon size={18} />
                </div>
                <div className="w-6 h-1.5 bg-neutral-2 rounded-full" />
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-neutral-2 rounded-md w-4/5" />
                <div className="h-3 bg-neutral-1 rounded-md w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fab Mockup */}
      <div className={`absolute bottom-8 right-6 flex flex-col items-end gap-5 z-50`}>
        <AnimatePresence>
          {isOpen && !isScrolling && (
            <motion.div 
              className="flex flex-col items-end gap-4"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
            >
              {actions.map((action) => (
                <motion.div
                  key={action.id}
                  className="flex items-center gap-4 group"
                  variants={{
                    open: { opacity: 1, scale: 1, x: 0, y: 0 },
                    closed: { opacity: 0, scale: 0.8, x: 20, y: 10 }
                  }}
                >
                  <span className="px-4 py-2 bg-neutral-11/90 backdrop-blur-xl rounded-2xl text-white text-[12px] font-black shadow-2xl border border-white/10 uppercase tracking-tighter">
                    {action.label}
                  </span>
                  <button
                    onClick={() => handleAction(action.label)}
                    className={`w-14 h-14 ${action.color} text-white rounded-[22px] flex items-center justify-center shadow-[0_12px_24px_-8px_rgba(0,0,0,0.3)] active:scale-90 transition-all hover:scale-110 active:shadow-inner box-border border-2 border-white/20`}
                  >
                    <action.icon size={22} />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          layout
          onClick={() => { if(!isScrolling) setIsOpen(!isOpen); }}
          className={`w-18 h-18 rounded-[28px] flex items-center justify-center shadow-[0_20px_50px_-12px_rgba(var(--brand-rgb,52,123,255),0.4)] z-50 transition-all duration-500 border-4 border-white/40 ${isOpen ? 'bg-neutral-12' : 'bg-brand shadow-brand/40'} text-white active:scale-95 hover:rotate-12 ${isScrolling ? 'opacity-40 pointer-events-none' : 'opacity-100'}`}
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <Plus size={36} className="drop-shadow-lg" />
          {!isOpen && !isScrolling && (
            <div className="absolute inset-0 bg-white/20 rounded-[28px] animate-ping pointer-events-none opacity-40 scale-75" />
          )}
        </motion.button>
      </div>

      {/* Toast Mockup */}
      <AnimatePresence>
        {activeToast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-4 bg-black/80 backdrop-blur-xl text-white rounded-2xl text-xs font-bold shadow-2xl z-[100] flex items-center gap-3 border border-white/10"
          >
            <Loader2 size={16} className="animate-spin text-brand" />
            {activeToast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-neutral-12/10 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export const DrawerPreview = () => {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: '首页' },
    { icon: Briefcase, label: '案例' },
    { icon: Info, label: '关于我们' },
  ];

  const userItems = [
    { icon: User, label: '会员中心' },
    { icon: FileText, label: '我的订单' },
    { icon: AlertCircle, label: '帮助中心' },
  ];

  const Drawer = ({ isOpen, onClose, position, title, children }: any) => (
    <AnimatePresence>
      {isOpen && (
        <div className="absolute inset-0 z-[60]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
          />
          {/* Drawer Panel */}
          <motion.div
            initial={{ x: position === 'left' ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: position === 'left' ? '-100%' : '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`absolute top-0 bottom-0 w-3/4 bg-neutral-0 dark:bg-neutral-2 shadow-2xl flex flex-col ${position === 'left' ? 'left-0' : 'right-0'}`}
          >
            <div className="h-14 px-4 flex items-center justify-between border-b border-neutral-2">
               <span className="font-bold text-neutral-11">{title}</span>
               <button onClick={onClose} className="p-2 -mr-2 text-neutral-6 hover:text-neutral-11">
                  <X size={20} />
               </button>
            </div>
            <div className="flex-1 overflow-y-auto">
               {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="relative w-full h-full bg-neutral-1 dark:bg-neutral-3 overflow-hidden flex flex-col">
       {/* Mock App Header */}
       <div className="h-14 px-4 bg-white/85 dark:bg-neutral-3/85 backdrop-blur-md border-b border-neutral-2 flex items-center justify-between shadow-sm relative z-[10] shrink-0">
          <button onClick={() => setLeftOpen(true)} className="p-2 text-neutral-9 hover:bg-neutral-2 rounded-xl transition-colors">
             <Menu size={20} />
          </button>
          <span className="font-extrabold text-[15px] text-neutral-12 tracking-tight uppercase">Drawer 抽屉</span>
          <button onClick={() => setRightOpen(true)} className="p-2 text-neutral-9 hover:bg-neutral-2 rounded-xl transition-colors">
             <User size={20} />
          </button>
       </div>

       {/* Mock Body Content */}
       <div className="flex-1 p-5 space-y-6 overflow-y-auto no-scrollbar">
          {/* Welcoming Hero Grid */}
          <div className="bg-gradient-to-br from-brand/10 to-purple-500/10 dark:from-brand/20 dark:to-purple-500/20 border border-brand/22 dark:border-brand/40 rounded-3xl p-5 space-y-3 shadow-sm relative overflow-hidden">
             <div className="absolute right-3 top-3 w-16 h-16 bg-brand/5 blur-xl rounded-full" />
             <span className="inline-flex px-2.5 py-1 text-[9px] font-black text-brand bg-brand/10 dark:bg-brand/20 rounded-full border border-brand/15 tracking-wider uppercase">DYNAMIC CANVAS</span>
             <h4 className="text-base font-black text-neutral-12 tracking-tight leading-snug">
                多维空间：满幅抽屉画布
             </h4>
             <p className="text-[11px] font-bold text-neutral-8 leading-relaxed">
                已完全消除嵌套，本演示直接响应侧边交互。请点击顶部标题栏左右侧触发器，或者轻点下方按钮体验弹性抽屉动效。
             </p>
          </div>

          {/* Interactive Action Cards */}
          <div className="grid grid-cols-2 gap-4">
             <button 
               onClick={() => setLeftOpen(true)}
               className="p-4 bg-neutral-0 dark:bg-neutral-2 border border-neutral-2 dark:border-neutral-4 rounded-3xl text-left hover:border-brand shadow-sm active:scale-95 transition-all flex flex-col justify-between h-36 group"
             >
                <div className="w-10 h-10 rounded-xl bg-neutral-1 dark:bg-neutral-3 flex items-center justify-center border border-neutral-2 dark:border-neutral-4 text-neutral-6 group-hover:text-brand transition-colors">
                   <Menu size={18} />
                </div>
                <div>
                   <span className="block text-[10px] font-black text-neutral-4 uppercase tracking-wider">LEFT SIDE</span>
                   <span className="block text-xs font-extrabold text-neutral-11 mt-0.5 group-hover:text-brand transition-colors">← 左侧导航</span>
                </div>
             </button>

             <button 
               onClick={() => setRightOpen(true)}
               className="p-4 bg-neutral-0 dark:bg-neutral-2 border border-neutral-2 dark:border-neutral-4 rounded-3xl text-left hover:border-brand shadow-sm active:scale-95 transition-all flex flex-col justify-between h-36 group"
             >
                <div className="w-10 h-10 rounded-xl bg-neutral-1 dark:bg-neutral-3 flex items-center justify-center border border-neutral-2 dark:border-neutral-4 text-neutral-6 group-hover:text-brand transition-colors">
                   <User size={18} />
                </div>
                <div>
                   <span className="block text-[10px] font-black text-neutral-4 uppercase tracking-wider">RIGHT SIDE</span>
                   <span className="block text-xs font-extrabold text-neutral-11 mt-0.5 group-hover:text-brand transition-colors">右侧设置 →</span>
                </div>
             </button>
          </div>

          {/* Preview Helper Tips */}
          <div className="p-4 bg-neutral-0/50 dark:bg-neutral-2/50 border border-dashed border-neutral-3 dark:border-neutral-4 rounded-2xl flex items-center gap-3">
             <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
             <p className="text-[10px] text-neutral-6 font-bold">
                点击黑色模糊背景可优雅收起侧边抽屉。
             </p>
          </div>
       </div>

       {/* Drawers */}
       <Drawer isOpen={leftOpen} onClose={() => setLeftOpen(false)} position="left" title="功能导航">
          <div className="p-2 pt-4">
             {menuItems.map((item, idx) => (
                <button key={idx} onClick={() => setLeftOpen(false)} className="w-full flex items-center gap-4 px-4 py-4 hover:bg-neutral-1 dark:hover:bg-neutral-3 transition-colors border-b border-neutral-1 dark:border-neutral-4 last:border-0 group">
                   <div className="p-2 bg-neutral-1 dark:bg-neutral-3 rounded-xl group-hover:bg-neutral-0 dark:group-hover:bg-neutral-2 group-hover:shadow-sm transition-all border border-transparent group-hover:border-neutral-2 dark:group-hover:border-neutral-4">
                      <item.icon size={18} className="text-neutral-6 group-hover:text-brand" />
                   </div>
                   <span className="text-sm font-bold text-neutral-9 group-hover:text-neutral-11 transition-colors">{item.label}</span>
                </button>
             ))}
          </div>
       </Drawer>

       <Drawer isOpen={rightOpen} onClose={() => setRightOpen(false)} position="right" title="账户信息">
          <div className="p-6 border-b border-neutral-2 dark:border-neutral-4 bg-neutral-1/30">
             <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-neutral-0 dark:bg-neutral-2 flex items-center justify-center border border-neutral-2 dark:border-neutral-4 shadow-sm overflow-hidden p-1">
                   <img className="w-full h-full rounded-xl object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Wang" alt="avatar" />
                </div>
                <div>
                   <div className="text-base font-black text-neutral-11">王勋</div>
                   <div className="flex gap-0.5 mt-1">
                      {[1,2,3,4,5].map(i => <Star key={i} size={10} className="fill-warning text-warning" />)}
                   </div>
                </div>
             </div>
          </div>
          <div className="p-2">
             {userItems.map((item, idx) => (
                <button key={idx} onClick={() => setRightOpen(false)} className="w-full flex items-center gap-4 px-4 py-4 hover:bg-neutral-1 dark:hover:bg-neutral-3 transition-colors group">
                   <div className="w-10 h-10 rounded-xl bg-neutral-1 dark:bg-neutral-3 flex items-center justify-center text-neutral-6 group-hover:bg-brand/10 group-hover:text-brand transition-all border border-neutral-2 dark:border-neutral-4">
                      <item.icon size={18} />
                   </div>
                   <span className="text-sm font-bold text-neutral-9 group-hover:text-neutral-11 transition-colors">{item.label}</span>
                   <ChevronRight size={14} className="ml-auto text-neutral-4 group-hover:text-brand transition-colors" />
                </button>
             ))}
          </div>
          <div className="mt-auto p-6 border-t border-neutral-2 dark:border-neutral-4 bg-neutral-1/30">
             <button onClick={() => setRightOpen(false)} className="w-full py-3 bg-neutral-12 dark:bg-neutral-1 text-neutral-1 dark:text-neutral-12 rounded-xl text-xs font-black tracking-widest active:scale-95 transition-all flex items-center justify-center gap-2 border border-neutral-3 dark:border-neutral-4 shadow-sm">
                <LogOut size={14} />
                退出当前账号
             </button>
          </div>
       </Drawer>
    </div>
  );
};

export const TabBarPreview = () => {
  const [active3, setActive3] = useState(0);
  const [active4, setActive4] = useState(0);
  const [active5, setActive5] = useState(0);

  const tabs3 = [
    { icon: Home, label: '首页' },
    { icon: Compass, label: '发现' },
    { icon: User, label: '我的' },
  ];

  const tabs4 = [
    { icon: Home, label: '首页' },
    { icon: Compass, label: '发现' },
    { icon: MessageSquare, label: '消息', badge: '99+' },
    { icon: User, label: '我的' },
  ];

  const tabs5 = [
    { icon: Home, label: '首页' },
    { icon: Compass, label: '生活' },
    { icon: Plus, label: '发布', special: true },
    { icon: MessageSquare, label: '消息', dot: true },
    { icon: User, label: '我的' },
  ];

  const TabItem = ({ item, active, onClick, index }: any) => {
    const isSpecial = item.special;
    return (
      <button 
        onClick={() => onClick(index)}
        className={`flex-1 flex flex-col items-center justify-center relative transition-all active:scale-95 ${isSpecial ? 'z-10' : ''}`}
      >
        <div className={`relative flex items-center justify-center ${isSpecial ? 'w-12 h-12 bg-brand rounded-2xl shadow-lg shadow-brand/40 -mt-10 text-white' : 'w-6 h-6'}`}>
          <item.icon 
            size={isSpecial ? 28 : 22} 
            className={`${active ? (isSpecial ? 'text-white' : 'text-brand') : (isSpecial ? 'text-white' : 'text-neutral-6')} transition-colors`} 
          />
          {item.badge && !isSpecial && (
            <span className="absolute -top-1.5 -right-3 px-1 min-w-[14px] h-3.5 bg-error text-white text-[8px] font-black rounded-full flex items-center justify-center border border-neutral-0 dark:border-neutral-3">
              {item.badge}
            </span>
          )}
          {item.dot && !isSpecial && (
            <span className="absolute top-0 -right-1 w-2 h-2 bg-error rounded-full border border-neutral-0 dark:border-neutral-3" />
          )}
        </div>
        {!isSpecial && (
          <span className={`text-[10px] font-black mt-1 transition-colors ${active ? 'text-brand' : 'text-neutral-6'}`}>
            {item.label}
          </span>
        )}
      </button>
    );
  };

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h4 className="text-[12px] text-neutral-8 font-bold uppercase tracking-wider">01. 三栏式 (简洁布局)</h4>
        <div className="bg-neutral-0 dark:bg-neutral-2 border-t border-neutral-2 shadow-2xl shadow-black/5 flex items-center h-16 pt-1 pb-2">
          {tabs3.map((item, idx) => (
            <TabItem key={idx} item={item} active={active3 === idx} onClick={setActive3} index={idx} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-[12px] text-neutral-8 font-bold uppercase tracking-wider">02. 四栏式 (包含徽标)</h4>
        <div className="bg-neutral-0 dark:bg-neutral-2 border-t border-neutral-2 shadow-2xl shadow-black/5 flex items-center h-16 pt-1 pb-2">
          {tabs4.map((item, idx) => (
            <TabItem key={idx} item={item} active={active4 === idx} onClick={setActive4} index={idx} />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-[12px] text-neutral-8 font-bold uppercase tracking-wider">03. 五栏式 (中心增强)</h4>
        <div className="bg-neutral-0 dark:bg-neutral-2 border-t border-neutral-2 shadow-2xl shadow-black/5 flex items-center h-16 pt-1 pb-2">
          {tabs5.map((item, idx) => (
            <TabItem key={idx} item={item} active={active5 === idx} onClick={setActive5} index={idx} />
          ))}
        </div>
      </div>

      <div className="bg-neutral-1 p-4 rounded-2xl border border-neutral-2">
        <p className="text-[10px] text-neutral-6 font-medium leading-relaxed">
          * 标签栏固定在页面底部。设计建议：标签数量在 3-5 个之间最佳，5 个以上建议结合更多菜单或改用侧边导航。中心增强按钮通常用于承载核心生产力入口。
        </p>
      </div>
    </div>
  );
};

export const TabsPreview = () => {
  const [activeTab1, setActiveTab1] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);
  
  // Nested Tabs State
  const [level1, setLevel1] = useState(0);
  const [level2, setLevel2] = useState(0);
  const [level3, setLevel3] = useState(0);

  const tabs1 = ['标签一', '标签二', '标签三', '标签四'];
  const tabs2 = ['全部', '进行中', '已评价', '售后'];

  const nestedStructure = [
    {
      label: '管理后台',
      children: [
        {
          label: '内容管理',
          children: ['文章列表', '分类目录', '多媒体库']
        },
        {
          label: '用户管理',
          children: ['账号列表', '权限设置', '操作日志']
        }
      ]
    },
    {
      label: '数据报表',
      children: [
        {
          label: '流量报表',
          children: ['实时统计', '来源分析', '留存分析']
        },
        {
          label: '销售统计',
          children: ['业绩报表', '客单分析', '退款统计']
        }
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {/* Basic Style */}
      <div className="space-y-4">
        <h4 className="text-[12px] text-neutral-8 font-bold uppercase tracking-wider">01. 基础线性 (常见布局)</h4>
        <div className="bg-neutral-0 dark:bg-neutral-2 border-b border-neutral-2 flex relative">
          {tabs1.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab1(idx)}
              className={`flex-1 py-4 text-sm font-bold transition-colors relative ${activeTab1 === idx ? 'text-brand' : 'text-neutral-7'}`}
            >
              {tab}
              {activeTab1 === idx && (
                <motion.div 
                  layoutId="underline" 
                  className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-brand rounded-full"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Card Style */}
      <div className="space-y-4">
        <h4 className="text-[12px] text-neutral-8 font-bold uppercase tracking-wider">02. 胶囊/卡片式 (筛选场景)</h4>
        <div className="bg-neutral-2 p-1 rounded-xl flex gap-1">
          {tabs2.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab2(idx)}
              className={`flex-1 py-2 text-[12px] font-black rounded-lg transition-all ${activeTab2 === idx ? 'bg-neutral-0 dark:bg-neutral-2 text-brand shadow-sm scale-[1.02]' : 'text-neutral-6 active:bg-neutral-3'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Nested Tabs Scenario */}
      <div className="space-y-4">
        <h4 className="text-[12px] text-neutral-8 font-bold uppercase tracking-wider">03. 三级嵌套场景 (复杂导航)</h4>
        <div className="bg-neutral-0 dark:bg-neutral-2 rounded-2xl border border-neutral-2 overflow-hidden shadow-sm">
          {/* Level 1: Underline */}
          <div className="flex border-b border-neutral-2 bg-neutral-1/50">
            {nestedStructure.map((item, idx) => (
              <button
                key={idx}
                onClick={() => { setLevel1(idx); setLevel2(0); setLevel3(0); }}
                className={`flex-1 py-3 text-[13px] font-black relative ${level1 === idx ? 'text-brand' : 'text-neutral-6'}`}
              >
                {item.label}
                {level1 === idx && <motion.div layoutId="l1" className="absolute bottom-0 left-6 right-6 h-0.5 bg-brand" />}
              </button>
            ))}
          </div>
          
          <div className="p-4 space-y-6">
            {/* Level 2: Pill */}
            <div className="flex flex-wrap gap-2">
              {nestedStructure[level1].children.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => { setLevel2(idx); setLevel3(0); }}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-bold transition-all border ${level2 === idx ? 'bg-brand text-white border-brand shadow-md shadow-brand/20' : 'bg-neutral-0 dark:bg-neutral-2 text-neutral-8 border-neutral-3 hover:border-neutral-4'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Level 3: Small Text/Outline */}
            <div className="flex gap-4 p-3 bg-neutral-1 rounded-xl border border-neutral-2 border-dashed">
              {nestedStructure[level1].children[level2].children.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setLevel3(idx)}
                  className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 transition-all ${level3 === idx ? 'text-brand underline underline-offset-4 decoration-2' : 'text-neutral-6 hover:text-neutral-8'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mock Content */}
            <div className="p-8 border border-neutral-2 rounded-xl bg-neutral-0 dark:bg-neutral-2 flex flex-col items-center justify-center space-y-2 border-dashed">
               <div className="w-10 h-10 bg-neutral-1 rounded-full flex items-center justify-center text-neutral-4 animate-pulse">
                  <LayoutIcon size={20} />
               </div>
               <span className="text-[10px] font-bold text-neutral-4">数据容器: {nestedStructure[level1].children[level2].children[level3]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SideBarPreview = () => {
  const [activeSide, setActiveSide] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const navigation = [
    {
      title: '数码家电',
      tabs: ['热销', '手机', '电脑', '摄影', '配件']
    },
    {
      title: '服饰内衣',
      tabs: ['男装', '女装', '运动', '内衣', '鞋履']
    },
    {
      title: '居家生活',
      tabs: ['家居', '厨具', '家纺', '洗护', '宠物']
    },
    {
      title: '食品生鲜',
      tabs: ['零食', '生鲜', '粮油', '酒饮', '茶叶']
    }
  ];

  return (
    <div className="flex h-[600px] bg-neutral-1 -mx-5 -my-10 overflow-hidden relative border border-neutral-3">
      {/* Search Header Mockup */}
      <div className="absolute top-0 right-0 left-24 h-12 bg-white/80 backdrop-blur-md border-b border-neutral-2 flex items-center px-4 z-10">
         <div className="flex-1 h-7 bg-neutral-1 rounded-full flex items-center px-3 gap-2 text-neutral-4">
            <SearchIcon size={14} />
            <span className="text-[10px] font-medium">搜索商品分类</span>
         </div>
      </div>

      {/* Sidebar Navigation */}
      <div className="w-24 bg-neutral-1 border-r border-neutral-2 flex flex-col h-full pt-2">
        {navigation.map((item, idx) => (
          <button
            key={idx}
            onClick={() => { setActiveSide(idx); setActiveTab(0); }}
            className={`relative py-6 text-center transition-all group active:scale-95 ${activeSide === idx ? 'bg-neutral-0 dark:bg-neutral-2' : 'hover:bg-neutral-2/50'}`}
          >
            {activeSide === idx && (
              <motion.div 
                layoutId="side-indicator"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-brand rounded-r-full" 
              />
            )}
            <span className={`text-[12px] font-black tracking-tighter ${activeSide === idx ? 'text-neutral-11' : 'text-neutral-6'}`}>
              {item.title}
            </span>
            {idx === 1 && (
              <span className="absolute top-4 right-2 w-2 h-2 bg-error rounded-full border border-neutral-0 dark:border-neutral-3" />
            )}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-neutral-0 dark:bg-neutral-2 flex flex-col pt-12">
        {/* Secondary Navigation (Tabs) */}
        <div className="flex overflow-x-auto scrollbar-hide px-3 py-3 border-b border-neutral-1 bg-neutral-0 dark:bg-neutral-2 sticky top-0 z-10 gap-2">
          {navigation[activeSide].tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-[11px] font-black transition-all ${activeTab === idx ? 'bg-neutral-11 text-white shadow-lg shadow-black/10' : 'bg-neutral-1 text-neutral-6 hover:bg-neutral-2'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 overflow-y-auto scrollbar-hide bg-neutral-0 dark:bg-neutral-2">
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <motion.div 
                key={`${activeSide}-${activeTab}-${i}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square bg-neutral-1 rounded-2xl border border-neutral-2 p-3 flex flex-col justify-between group hover:border-brand transition-colors"
              >
                <div className="w-8 h-8 bg-neutral-2 rounded-lg group-hover:scale-110 transition-transform" />
                <div className="space-y-1">
                   <div className="h-3 bg-neutral-2 rounded-sm w-4/5" />
                   <div className="h-2 bg-neutral-1 rounded-sm w-1/2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ButtonGroupPreview = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['视图', '代码', '资源'];

  return (
    <div className="space-y-10">
       <div className="space-y-4">
          <h4 className="text-[12px] text-neutral-8 font-bold uppercase tracking-wider">01. 分段选择器 (Segmented)</h4>
          <div className="relative bg-neutral-1 p-1 g-radius flex items-center border border-neutral-3">
             <motion.div 
               className="absolute top-1 bottom-1 bg-neutral-0 dark:bg-neutral-2 g-radius shadow-sm z-0"
               initial={false}
               animate={{ 
                 left: `calc(${(activeTab * 100) / tabs.length}% + 4px)`,
                 width: `calc(${100 / tabs.length}% - 8px)`
               }}
               transition={{ type: 'spring', stiffness: 400, damping: 30 }}
             />
             {tabs.map((tab, idx) => (
               <button
                 key={tab}
                 onClick={() => setActiveTab(idx)}
                 className={`relative z-10 flex-1 py-1.5 text-xs font-bold transition-colors ${activeTab === idx ? 'text-neutral-12' : 'text-neutral-6 hover:text-neutral-9'}`}
               >
                 {tab}
               </button>
             ))}
          </div>
       </div>

       <div className="space-y-4">
          <h4 className="text-[12px] text-neutral-8 font-bold uppercase tracking-wider">02. 主要操作组合</h4>
          <div className="flex gap-2 p-2 bg-neutral-0 dark:bg-neutral-2 g-radius-card shadow-sm border border-neutral-3">
             <button className="flex-1 h-11 bg-neutral-1 text-neutral-11 g-radius font-bold text-sm active:bg-neutral-2 transition-colors">
               取消
             </button>
             <button className="flex-[2] h-11 bg-brand text-white g-radius font-bold text-sm shadow-lg shadow-brand/20 active:scale-95 transition-all">
               确认提交
             </button>
          </div>
       </div>

       <div className="space-y-4">
          <h4 className="text-[12px] text-neutral-8 font-bold uppercase tracking-wider">03. 透明图标组</h4>
          <div className="grid grid-cols-3 bg-neutral-0 dark:bg-neutral-2 g-radius-card shadow-sm border border-neutral-3 divide-x divide-neutral-2">
             <button className="flex flex-col items-center gap-1.5 py-3 hover:bg-neutral-1 transition-colors active:opacity-60">
                <Bell size={18} className="text-brand" />
                <span className="text-[11px] font-bold text-neutral-10">提醒</span>
             </button>
             <button className="flex flex-col items-center gap-1.5 py-3 hover:bg-neutral-1 transition-colors active:opacity-60">
                <Settings2 size={18} className="text-neutral-6" />
                <span className="text-[11px] font-bold text-neutral-10">设置</span>
             </button>
             <button className="flex flex-col items-center gap-1.5 py-3 hover:bg-neutral-1 transition-colors active:opacity-60 relative overflow-hidden">
                <div className="absolute top-3 right-8 w-1.5 h-1.5 bg-error rounded-full" />
                <MoreHorizontal size={18} className="text-neutral-6" />
                <span className="text-[11px] font-bold text-neutral-10">更多</span>
             </button>
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

export const RatePreview = () => {
  const [rate1, setRate1] = useState(3);
  const [rate2, setRate2] = useState(3.5);

  const renderStars = (value: number, onChange: (v: number) => void, allowHalf = false) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map(star => {
          let isFull = value >= star;
          let isHalf = allowHalf && value === star - 0.5;
          return (
            <div key={star} className="relative cursor-pointer hover:scale-110 transition-transform" onClick={(e) => {
              if (allowHalf) {
                const rect = e.currentTarget.getBoundingClientRect();
                const isLeft = e.clientX - rect.left < rect.width / 2;
                onChange(isLeft ? star - 0.5 : star);
              } else {
                onChange(star);
              }
            }}>
              {isHalf ? (
                 <div className="relative">
                   <Star size={24} className="text-neutral-3 fill-neutral-3" />
                   <div className="absolute inset-0 overflow-hidden w-[50%]">
                      <Star size={24} className="text-[#FFD21E] fill-[#FFD21E]" />
                   </div>
                 </div>
              ) : (
                <Star size={24} className={isFull ? "text-[#FFD21E] fill-[#FFD21E]" : "text-neutral-3 fill-neutral-3"} />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-neutral-1/50 p-4 rounded-xl border border-neutral-3">
        <span className="text-[13px] font-bold text-neutral-9">基础评分</span>
        {renderStars(rate1, setRate1)}
      </div>
      <div className="flex items-center justify-between bg-neutral-1/50 p-4 rounded-xl border border-neutral-3">
        <span className="text-[13px] font-bold text-neutral-9">半星评分</span>
        <div className="flex items-center gap-3">
          <span className="text-brand font-bold text-[14px]">{rate2}分</span>
          {renderStars(rate2, setRate2, true)}
        </div>
      </div>
    </div>
  );
};

export const IndexesPreview = () => {
  const lists = [
    { letter: 'A', items: ['安徽 Province', '澳门 Region'] },
    { letter: 'B', items: ['北京 City'] },
    { letter: 'C', items: ['重庆 City'] },
    { letter: 'F', items: ['福建 Province'] },
    { letter: 'G', items: ['广东 Province', '广西 Region', '贵州 Province', '甘肃 Province'] },
    { letter: 'H', items: ['海南 Province', '河南 Province', '河北 Province', '湖南 Province', '湖北 Province', '黑龙江 Province'] },
    { letter: 'J', items: ['吉林 Province', '江苏 Province', '江西 Province'] }
  ];

  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [showBubble, setShowBubble] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<any>(null);

  const scrollToIndex = (letter: string) => {
    setActiveLetter(letter);
    setShowBubble(true);
    
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShowBubble(false);
    }, 1000);

    const element = document.getElementById(`indexes-item-${letter}`);
    if (element && scrollRef.current) {
      scrollRef.current.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden bg-neutral-0 dark:bg-neutral-2">
      {/* Header */}
      <div className="h-14 px-6 border-b border-neutral-2 flex items-center justify-between z-30 shrink-0 bg-white/85 dark:bg-neutral-3/85 backdrop-blur-md">
        <h3 className="font-black text-[15px] text-neutral-12 uppercase tracking-tight">Select Region</h3>
        <div className="flex items-center gap-3">
           <SearchIcon size={18} className="text-neutral-4" />
           <div className="w-8 h-8 rounded-full bg-neutral-1 dark:bg-neutral-3 flex items-center justify-center border border-neutral-2 dark:border-neutral-4">
             <span className="text-[10px] font-black">?</span>
           </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto no-scrollbar scroll-smooth bg-neutral-1 dark:bg-neutral-3">
         <div className="p-4 space-y-6">
            {lists.map((group) => (
              <div key={group.letter} id={`indexes-item-${group.letter}`} className="scroll-mt-4 space-y-3">
                 <div className="px-2 text-xs font-black text-brand uppercase tracking-widest">{group.letter}</div>
                 <div className="bg-neutral-0 dark:bg-neutral-2 rounded-[24px] border border-neutral-2 dark:border-neutral-4 overflow-hidden shadow-sm">
                    {group.items.map((item, i) => (
                      <div key={item} className={`px-5 py-4 text-[14px] font-bold text-neutral-11 active:bg-neutral-1 transition-all flex items-center justify-between ${i !== group.items.length - 1 ? 'border-b border-neutral-1' : ''}`}>
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-neutral-1 dark:bg-neutral-3 flex items-center justify-center border border-neutral-2 dark:border-neutral-4 text-[10px] text-neutral-4 font-black">REG</div>
                            {item}
                         </div>
                         <ChevronRight size={14} className="text-neutral-4 hover:text-brand transition-colors" />
                      </div>
                    ))}
                 </div>
              </div>
            ))}
            <div className="h-20" />
         </div>
      </div>

      {/* Index Sidebar */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 z-30 pointer-events-auto py-4 px-1 rounded-full bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-white/40 dark:border-white/5 shadow-xl shadow-black/5">
         {lists.map(group => (
           <button 
             key={group.letter}
             onClick={() => scrollToIndex(group.letter)}
             className={`w-6 h-6 flex items-center justify-center text-[10px] font-black rounded-full transition-all duration-300 ${activeLetter === group.letter ? 'bg-brand text-white shadow-lg shadow-brand/40 scale-110' : 'text-neutral-6 hover:text-neutral-11 dark:hover:text-neutral-1 hover:bg-neutral-0 dark:hover:bg-neutral-3'}`}
           >
             {group.letter}
           </button>
         ))}
      </div>

      <AnimatePresence>
         {showBubble && activeLetter && (
           <motion.div 
             initial={{ opacity: 0, scale: 0.5, y: -20 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             exit={{ opacity: 0, scale: 0.5, y: 20 }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-brand/90 backdrop-blur-xl rounded-3xl flex items-center justify-center text-4xl font-black text-white shadow-[0_30px_60px_rgba(var(--brand-rgb),0.5)] z-50 pointer-events-none border border-white/20"
           >
              {activeLetter}
           </motion.div>
         )}
      </AnimatePresence>
    </div>
  );
};

export const ImagePreview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    'https://images.unsplash.com/photo-1618221195710-dd6b41faeaa6?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1616489953149-7551745cae7b?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&q=80&w=400',
    'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80&w=400',
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="aspect-square bg-neutral-2 rounded-xl overflow-hidden cursor-pointer border border-neutral-3 relative group"
          >
            <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/10 transition-colors z-10 flex items-center justify-center">
              <Sparkles size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <img src={src} alt="Preview" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] bg-neutral-12/90 flex items-center justify-center p-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-square w-full max-w-sm bg-neutral-1 rounded-[40px] overflow-hidden shadow-2xl overflow-hidden group"
            >
              <img 
                src={images[0]} 
                alt="Large Preview" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-xl rounded-full flex items-center justify-center text-white transition-all shadow-xl"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const PullDownRefreshPreview = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  return (
    <div className="relative h-[250px] border border-neutral-3 rounded-3xl overflow-hidden bg-neutral-1 group shadow-inner">
      <div className="absolute inset-x-0 top-0 h-16 flex items-center justify-center z-0">
        {isRefreshing ? (
          <div className="flex flex-col items-center gap-1">
            <Loader2 className="animate-spin text-brand" size={24} />
            <span className="text-[9px] font-black text-brand uppercase tracking-widest">Updating...</span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1 text-neutral-4">
            <ArrowDown size={20} className="animate-bounce" />
            <span className="text-[9px] font-black uppercase tracking-widest">Pull Down</span>
          </div>
        )}
      </div>

      <motion.div 
        drag="y"
        dragConstraints={{ top: 0, bottom: 80 }}
        dragElastic={0.6}
        onDragEnd={(_, info) => {
          if (info.offset.y > 60) handleRefresh();
        }}
        className="relative z-10 w-full h-full bg-neutral-0 dark:bg-neutral-2 border-t border-neutral-2 shadow-2xl p-6 space-y-4"
      >
        <div className="flex items-center justify-between mb-2">
           <h4 className="font-black text-neutral-12 text-sm">最新动态</h4>
           <div className="w-8 h-8 rounded-full bg-neutral-1 flex items-center justify-center text-neutral-4"><RefreshCw size={14}/></div>
        </div>
        {[1, 2, 3].map(i => (
          <div key={i} className="flex gap-4 p-4 bg-neutral-1 rounded-2xl border border-neutral-2 shadow-sm animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
             <div className="w-10 h-10 rounded-xl bg-neutral-2 shrink-0 overflow-hidden">
                <div className="w-full h-full bg-neutral-3 animate-pulse" />
             </div>
             <div className="flex-1 space-y-2">
                <div className="h-3 w-3/4 bg-neutral-2 rounded-full" />
                <div className="h-2 w-1/2 bg-neutral-2 rounded-full opacity-60" />
             </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const BackTopPreview = () => {
  const [show, setShow] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const posts = [
    {
      id: 1,
      title: "Ant Design Style Spec V5.0 Released",
      category: "DESIGN SYSTEM",
      desc: "An exploration into next-generation component architectures, micro-interactions, responsive grids, and semantic tokens for modern development environments.",
      author: "Alex Rivera",
      date: "Just now",
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
    },
    {
      id: 2,
      title: "Mastering Framer Motion & Fluid Micro-interactions",
      category: "ANIMATION",
      desc: "Learn how to build gesture-driven layouts, physics-based springs, staggered entrance animations, and seamless page-state switches natively in React.",
      author: "Emma Watson",
      date: "2 mins ago",
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20"
    },
    {
      id: 3,
      title: "Building Durable Cloud Persistence with Firestore",
      category: "ENGINEERING",
      desc: "An in-depth study of database rule optimization, security rules compilation, document structuring for chat applications, and automatic backup routines.",
      author: "David Chen",
      date: "1 hour ago",
      color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
    },
    {
      id: 4,
      title: "The Return of Swiss Modernism in Typography Guide",
      category: "TYPOGRAPHY",
      desc: "Why clean grotesque geometric sans-serif configurations, tight tracking, massive displays, and bold negative space continue to dominate premium screens.",
      author: "Marcus Aurelius",
      date: "3 hours ago",
      color: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
    },
    {
      id: 5,
      title: "Optimizing Mobile Frame Rates for Low-End Devices",
      category: "PERFORMANCE",
      desc: "Reducing canvas repaint bounds, avoiding offscreen DOM elements, debouncing heavy scroll list calculations, and leveraging hardware CSS transforms.",
      author: "Sarah Jenkins",
      date: "1 day ago",
      color: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20"
    },
    {
      id: 6,
      title: "Curating a Unified Dark Gray Slate Color Palette",
      category: "COLOR SCIENCE",
      desc: "How soft charcoal grays, muted neutral backdrops, and strategic high-contrast brand accents create beautiful, eye-safe user experiences with high compliance.",
      author: "Lara Croft",
      date: "2 days ago",
      color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20"
    }
  ];
  
  const handleScroll = () => {
    if (scrollRef.current) {
      setShow(scrollRef.current.scrollTop > 150);
    }
  };

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden bg-neutral-1 dark:bg-neutral-3">
      {/* Header */}
      <div className="h-14 px-6 border-b border-neutral-2 flex items-center justify-between z-30 shrink-0 bg-white/85 dark:bg-neutral-3/85 backdrop-blur-md">
        <div className="flex flex-col">
          <h3 className="font-black text-[15px] text-neutral-12 uppercase tracking-tight">Explore Feed</h3>
          <span className="text-[10px] text-neutral-6 font-bold uppercase tracking-wider">{posts.length} articles curated</span>
        </div>
        <div className="flex items-center gap-3">
           <div className="w-8 h-8 rounded-full bg-neutral-0 dark:bg-neutral-2 flex items-center justify-center border border-neutral-2 dark:border-neutral-4 shadow-sm text-neutral-8 hover:text-brand transition-colors cursor-pointer">
              <RefreshCw size={14} className="animate-spin-slow" />
           </div>
        </div>
      </div>

      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto px-5 py-6 space-y-5 no-scrollbar scroll-smooth"
      >
        <div className="p-5 bg-gradient-to-br from-brand/10 to-purple-500/10 dark:from-brand/20 dark:to-purple-500/20 border border-brand/22 dark:border-brand/40 rounded-3xl space-y-3 relative overflow-hidden shadow-sm">
           <div className="absolute right-3 top-3 w-16 h-16 bg-brand/5 blur-xl rounded-full" />
           <div className="inline-block px-2.5 py-1 text-[9px] font-black text-brand bg-brand/10 dark:bg-brand/20 rounded-full border border-brand/20 tracking-wider uppercase">HIGHLIGHT</div>
           <h4 className="text-base font-black text-neutral-12 tracking-tight leading-snug">Scroll down slowly to test the dynamic "Back to Top" floating trigger in action!</h4>
           <p className="text-[11px] text-neutral-8 font-bold leading-normal">
              When content goes out of viewport, the bottom-right action trigger will fade in gracefully with real-time viewport offset tracking.
           </p>
        </div>

        {posts.map(post => (
          <div key={post.id} className="p-5 bg-neutral-0 dark:bg-neutral-2 border border-neutral-2 dark:border-neutral-4 rounded-3xl shadow-sm space-y-4 hover:shadow-md transition-all group">
             <div className="flex items-center justify-between">
                <span className={`px-2.5 py-0.5 text-[9px] font-black rounded-full border ${post.color} tracking-wider uppercase`}>
                   {post.category}
                </span>
                <span className="text-[10px] text-neutral-6 font-semibold">{post.date}</span>
             </div>
             <div className="space-y-1.5">
                <h4 className="font-extrabold text-[14px] text-neutral-12 leading-snug group-hover:text-brand transition-colors">
                   {post.title}
                </h4>
                <p className="text-[11px] text-neutral-6 leading-relaxed font-medium">
                   {post.desc}
                </p>
             </div>
             <div className="pt-3 border-t border-neutral-1 dark:border-neutral-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <div className="w-6 h-6 rounded-full bg-brand/10 text-brand flex items-center justify-center font-black text-[9px] border border-brand/15 uppercase">
                      {post.author.charAt(0)}
                   </div>
                   <span className="text-[11px] font-bold text-neutral-9">{post.author}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-black text-brand tracking-tight">
                   <span>Read</span>
                   <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
             </div>
          </div>
        ))}
        <div className="h-12" />
      </div>

      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="absolute bottom-6 right-6 w-12 h-12 bg-neutral-12 dark:bg-neutral-1 text-neutral-0 dark:text-neutral-12 rounded-full flex items-center justify-center shadow-2xl hover:shadow-brand/20 transition-all z-40 border border-neutral-3/30"
          >
            <ArrowUp size={20} className="stroke-[3]" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
export const AIDesignPreview = () => {
  return (
    <div className="animate-slide-up space-y-24 pb-32">
      {/* 01: Hero Section - The New Frontier of Interaction */}
      <div className="relative p-16 bg-neutral-11 dark:bg-neutral-12 rounded-[80px] overflow-hidden group shadow-3xl">
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-brand/30 blur-[180px] -translate-y-1/2 translate-x-1/2 animate-pulse opacity-70" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-indigo-600/20 blur-[140px] rounded-full opacity-50" />
        
        <div className="relative z-10 max-w-3xl space-y-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-5 py-2 bg-white/10 dark:bg-brand/20 backdrop-blur-2xl rounded-full border border-white/20 dark:border-brand/30 shadow-2xl"
          >
            <Sparkles size={18} className="text-brand animate-spin-slow" />
            <span className="text-[12px] font-black text-white dark:text-brand-light tracking-[0.4em] uppercase">Intelligence UX Standard v3.5 (PM Edition)</span>
          </motion.div>
          <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.95]">
            概率与确定<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-light to-purple-400">重定义产品力</span>
          </h2>
          <p className="text-white/70 dark:text-white/60 font-medium leading-relaxed text-xl md:text-2xl max-w-2xl border-l-4 border-brand pl-8 py-2">
            广联 AI Design 不止是 UI 规范。它是一套将 AI 的“波动性”转化为“生产力”的方法论：通过意图对齐、成本感知与实时反馈，构建人类与硅基生命之间的深层信任。
          </p>
        </div>
      </div>
        
      {/* 02: Design Philosophy: The Three Pillars */}
      <section className="space-y-12" id="design-principles">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
           <div className="space-y-3">
              <h3 className="text-4xl font-black tracking-tight text-neutral-11">AI 交互设计原则</h3>
              <p className="text-neutral-6 font-medium text-lg">从确定性界面转向“可能性”界面的设计准则</p>
           </div>
           <div className="w-24 h-1 bg-brand/20 rounded-full hidden md:block mb-4" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: '意图对齐循环', 
              desc: 'AI 并非一次性交付。通过“初稿-反馈-调优”的螺旋式上升，让 AI 深入理解用户的特定语境与隐含偏好。',
              icon: <RefreshCw size={32} />,
              color: 'text-brand',
              bg: 'bg-brand/5'
            },
            { 
              title: '算法决策透明化', 
              desc: '展示“思维链”（CoT）与数据引证。用户有权知道 AI 为什么给出这个建议，以及该建议基于哪段原始业务规则。',
              icon: <Target size={32} />,
              color: 'text-indigo-500',
              bg: 'bg-indigo-500/5'
            },
            { 
              title: '确定性兜底逻辑', 
              desc: '当 AI 信心得分低于阈值时，自动滑入“规则驱动”的专家系统。在生成式交互中保留垂直业务逻辑的最终解释权。',
              icon: <ShieldCheck size={32} />,
              color: 'text-success',
              bg: 'bg-success/5'
            },
            { 
              title: '交互成本感知', 
              desc: '将算力成本与响应质量显性化。让用户在高价值、深思考与低延迟、快捷操作之间选择最优的“效能比”平衡点。',
              icon: <Timer size={32} />,
              color: 'text-orange-500',
              bg: 'bg-orange-500/5'
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-8 bg-neutral-0 dark:bg-neutral-2 border border-neutral-3 rounded-[40px] space-y-6 group transition-all hover:border-brand/30 hover:shadow-2xl relative overflow-hidden"
            >
              <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500`}>
                {item.icon}
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-black text-neutral-11">{item.title}</h4>
                <p className="text-[13px] text-neutral-6 leading-relaxed font-bold tracking-tight">{item.desc}</p>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Sparkles size={120} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 03: Motion UX Standard for AI */}
      <section className="bg-neutral-1 dark:bg-neutral-1/40 p-8 md:p-16 rounded-[40px] md:rounded-[80px] border border-neutral-3 dark:border-neutral-3/20 space-y-12 md:space-y-16" id="motion-standards">
         <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-16 h-16 bg-neutral-11 dark:bg-brand text-neutral-0 dark:text-white rounded-3xl flex items-center justify-center shadow-xl shadow-brand/10">
               <Activity size={32} />
            </div>
            <div>
               <h3 className="text-2xl md:text-3xl font-black text-neutral-11">移动端 AI 动效体系标准</h3>
               <p className="text-neutral-6 font-bold">消除焦虑的技术语言：利用物理法则构建人类与硅基生命的深度契合</p>
            </div>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6 md:space-y-8">
               <div className="p-6 md:p-8 bg-neutral-0 dark:bg-neutral-2/50 border border-neutral-3 dark:border-neutral-3/20 rounded-[32px] md:rounded-[40px] space-y-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] md:text-sm font-black text-brand tracking-[0.2em] uppercase bg-brand/5 px-3 py-1 rounded-full">Shimmer / 思维张力</span>
                     <span className="text-[10px] font-bold text-neutral-4 font-mono">1.2s - 2.4s Smooth Loop</span>
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 bg-brand rounded-2xl flex items-center justify-center animate-shine shadow-lg shadow-brand/20 relative overflow-hidden">
                        <Sparkles size={20} className="text-white relative z-10" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark via-brand to-brand-light opacity-50" />
                      </div>
                      <div className="flex-1 h-2.5 bg-neutral-2 dark:bg-neutral-3/30 rounded-full overflow-hidden border border-neutral-3 dark:border-neutral-3/10 shadow-inner">
                        <motion.div 
                          animate={{ x: ['-150%', '300%'] }}
                          transition={{ duration: 2.2, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
                          className="w-1/2 h-full bg-gradient-to-r from-transparent via-brand/60 to-transparent"
                        />
                      </div>
                    </div>
                    <p className="text-[13px] text-neutral-7 leading-relaxed font-medium">
                      在移动端小屏中，使用“非对称微光扩散”掩盖网络震荡。视觉纹理的流动节奏模拟人类深呼吸频率（约每分钟 16 次），通过心理暗示将后台的长耗时计算转化为“系统正在缜密思考”的正向期待。
                    </p>
                  </div>
               </div>

               <div className="p-6 md:p-8 bg-neutral-0 dark:bg-neutral-2/50 border border-neutral-3 dark:border-neutral-3/20 rounded-[32px] md:rounded-[40px] space-y-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] md:text-sm font-black text-purple-600 dark:text-purple-400 tracking-[0.2em] uppercase bg-purple-500/5 px-3 py-1 rounded-full">Streaming / 感知实体</span>
                     <span className="text-[10px] font-bold text-neutral-4 font-mono">Real-time Velocity</span>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2.5">
                       <motion.div initial={{ width: 0, opacity: 0 }} whileInView={{ width: '90%', opacity: 1 }} transition={{ duration: 1.5, repeat: Infinity, ease: "circOut" }} className="h-2 bg-neutral-2 dark:bg-neutral-3/30 rounded-full" />
                       <motion.div initial={{ width: 0, opacity: 0 }} whileInView={{ width: '65%', opacity: 1 }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.1, ease: "circOut" }} className="h-2 bg-neutral-2 dark:bg-neutral-3/30 rounded-full" />
                       <motion.div initial={{ width: 0, opacity: 0 }} whileInView={{ width: '80%', opacity: 1 }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2, ease: "circOut" }} className="h-2 bg-neutral-2 dark:bg-neutral-3/30 rounded-full" />
                    </div>
                    <p className="text-[13px] text-neutral-7 leading-relaxed font-medium mt-4">
                      逐字浮现的 X-Y 轴联动位移：文字上浮 8px 同时配合 0.2s 的透明度渐变。这种动效模拟了实体纸张从深处推送到视平线的过程，消除了内容瞬间跳变的视觉突兀感，不仅是视觉效果，更是信息层级的重塑。
                    </p>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
            {[
                 { label: '自适应弹性 (Adaptive Spring)', desc: '移动端手势交互必须使用 Spring 物理引擎。推荐 Stiffness: 320 (强响应), Damping: 28 (微弹)，消除机械直线感。', icon: <MousePointer2 size={24}/> },
                 { label: '空间一致性 (Context Warp)', desc: '跨场景切换通过容器平移实现。保持锚点跟随，避免全屏硬切，让用户在小屏中拥有“地理空间”般的连续感知。', icon: <Maximize2 size={24}/> },
                 { label: '触感共振 (Haptic Pulse)', desc: 'AI 思考、错误、成功的动效必须精准匹配 15ms-40ms 的线性马达反馈，让“智商”具备可被触摸的厚度。', icon: <Smartphone size={24}/> },
                 { label: '视觉降级 (Graceful Fallback)', desc: '暗色模式下，动效对比度需从 85% 降至 60%，并移除强光细节，避免深夜高频明暗变化造成的视觉压力。', icon: <Moon size={24}/> },
               ].map((item, i) => (
                 <div key={i} className="p-5 md:p-6 bg-neutral-0 dark:bg-neutral-2/40 border border-neutral-3 dark:border-neutral-3/20 hover:border-brand/40 transition-all rounded-[28px] md:rounded-3xl space-y-4 shadow-sm group hover:-translate-y-1">
                    <div className="w-10 h-10 rounded-xl bg-neutral-1 dark:bg-neutral-3/30 flex items-center justify-center text-brand group-hover:scale-110 transition-transform">{item.icon}</div>
                    <div className="text-[12px] md:text-sm font-black text-neutral-11 tracking-tight">{item.label}</div>
                    <p className="text-[11px] text-neutral-6 font-bold leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 04: Multi-modal Experience */}
      <section className="space-y-12 md:space-y-16" id="multimodal-feedback">
        <div className="text-center space-y-4 max-w-2xl mx-auto px-4">
           <h3 className="text-3xl md:text-5xl font-black text-neutral-11 tracking-tighter">多模态感官标准 (Multi-modal)</h3>
           <p className="text-neutral-6 font-medium text-base md:text-lg">除了可见的流光，还要有听得到的呼吸、触得到的纹理，这才是智慧的全貌</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
           {[
             { title: '听觉符号 (Sonic Identity)', desc: '为 AI 生成开启、异常、完成定义独特的功能短音。采样率需大于 48kHz，频响集中在 2k-5kHz 舒适区。', icon: <Volume2 size={40} />, color: 'text-blue-500', bg: 'bg-blue-500/5' },
             { title: '物理马达 (Haptic Feedback)', desc: '基于 AI 文本生成的“权重”与“情绪”，通过 Taptic Engine 模拟不同振幅的逐字敲击反馈。', icon: <Fingerprint size={40} />, color: 'text-brand', bg: 'bg-brand/5' },
             { title: '氛围扩散 (Ambient UI)', desc: '界面边缘微光会根据 AI 输出的情感基调（暖色鼓励、冷色理性）进行呼吸同步。', icon: <SunMedium size={40} />, color: 'text-orange-500', bg: 'bg-orange-500/5' }
           ].map((item, idx) => (
             <div key={idx} className="space-y-8 group">
                <div className={`w-full aspect-square ${item.bg} border border-neutral-3 dark:border-neutral-3/20 rounded-[48px] md:rounded-[64px] flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-neutral-11/5`}>
                   <div className="absolute inset-0 bg-neutral-0 dark:bg-neutral-2 opacity-40 group-hover:opacity-0 transition-opacity" />
                   <motion.div 
                     animate={{ 
                       y: [0, -10, 0],
                       rotate: [0, 2, -2, 0]
                     }}
                     transition={{ duration: 6, repeat: Infinity, delay: idx * 0.4, ease: "easeInOut" }}
                     className={`relative z-10 ${item.color} group-hover:scale-110 transition-transform duration-500`}
                   >
                     {item.icon}
                   </motion.div>
                   
                   {/* Decorative Elements */}
                   <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-neutral-3 dark:bg-neutral-5" />
                   <div className="absolute bottom-12 left-10 w-1 h-1 rounded-full bg-neutral-3 dark:bg-neutral-5" />
                </div>
                <div className="text-center space-y-3 px-4">
                   <h5 className="text-lg md:text-xl font-black text-neutral-11 tracking-tight group-hover:text-brand transition-colors">{item.title}</h5>
                   <p className="text-[13px] text-neutral-6 font-bold leading-relaxed">{item.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* 05: Core AI Components Library */}
      <section className="space-y-12">
         <div className="flex items-center gap-4 px-4">
            <div className="w-1.5 h-10 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.4)]" />
            <h3 className="text-3xl font-black text-neutral-11 tracking-tight">AI PM 工作台：动态组件规范</h3>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Component 1: Intent Parameterizer */}
            <div className="bg-neutral-0 dark:bg-neutral-2 border border-neutral-3 rounded-[60px] p-10 space-y-8 hover:shadow-2xl transition-shadow group relative overflow-hidden">
               <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                     <h4 className="text-xl font-black text-neutral-11">1. 意图颗粒度调节阀</h4>
                     <Settings size={20} className="text-neutral-4 group-hover:rotate-90 transition-transform duration-500" />
                  </div>
                  <p className="text-sm text-neutral-6 font-bold">允许用户在“极致创意”与“严格守法”之间动态调整模型参数。解决“幻觉”问题的核心工具。</p>
               </div>
               
               <div className="bg-neutral-1 rounded-[40px] border border-neutral-3 p-8 space-y-8 shadow-inner">
                  <div className="space-y-6">
                     <div className="flex justify-between items-center px-2">
                        <span className="text-[10px] font-black text-neutral-5 uppercase tracking-widest">Temperature Settings</span>
                        <div className="flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                           <span className="text-[10px] font-black text-success">Balanced Mode</span>
                        </div>
                     </div>
                     <div className="relative h-12 flex items-center px-2">
                        <div className="absolute inset-x-2 h-2 bg-neutral-2 rounded-full opacity-30" />
                        <div className="absolute left-2 w-[60%] h-2 bg-brand/30 rounded-full" />
                        <div className="absolute left-[60%] -translate-x-1/2 w-8 h-8 bg-neutral-0 dark:bg-neutral-11 rounded-full shadow-2xl border-4 border-brand flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                           <Zap size={14} className="text-brand" />
                        </div>
                        <div className="absolute inset-x-8 -bottom-6 flex justify-between text-[10px] font-bold text-neutral-4 pointer-events-none uppercase">
                           <span>Strict</span>
                           <span>Creative</span>
                        </div>
                     </div>
                     <div className="grid grid-cols-3 gap-3 pt-4">
                        {['精准', '平衡', '启发'].map((m) => (
                           <button key={m} className={`py-3 rounded-2xl text-xs font-bold transition-all border ${m === '平衡' ? 'bg-brand text-white border-brand shadow-lg' : 'bg-neutral-0 dark:bg-neutral-2 text-neutral-6 border-neutral-3 hover:border-neutral-5'}`}>
                              {m}
                           </button>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            {/* Component 2: Thinking Process / Chain of Thought */}
            <div className="bg-neutral-0 dark:bg-neutral-2 border border-neutral-3 rounded-[60px] p-10 space-y-8 hover:shadow-2xl transition-shadow group">
               <div className="space-y-3">
                  <h4 className="text-xl font-black text-neutral-11">2. 潜意识可视化：思考链 (CoT)</h4>
                  <p className="text-sm text-neutral-6 font-bold">将内容的产生过程显性化。PM 手册：高质量的中间过程是建立信任的第一步。</p>
               </div>

               <div className="bg-neutral-1 rounded-[40px] border border-neutral-3 p-10 h-[320px] flex items-center justify-center">
                  <div className="max-w-xs w-full space-y-6">
                    <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                       <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 border-4 border-dashed border-brand/20 rounded-full" />
                       <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute inset-4 border-2 border-dashed border-brand/40 rounded-full" />
                       <Sparkles size={32} className="text-brand animate-pulse" />
                    </div>
                    <div className="space-y-3 text-center">
                       <p className="text-sm font-black text-neutral-11">认知处理中 (PM 手册：展示中间过程比单纯展示最终结果更重要)</p>
                       <div className="space-y-2">
                          <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-4 font-bold">
                             <Check size={12} className="text-success" /> 检索 2024款奔驰全系零售政策官方库
                          </div>
                          <div className="flex items-center justify-center gap-2 text-[11px] text-brand font-black animate-pulse">
                             <Activity size={12} /> 计算 2.99% 贴息方案下的最终分期成本...
                          </div>
                       </div>
                    </div>
                  </div>
               </div>
            </div>

            {/* Component 3: Sources / Fact Check */}
            <div className="bg-neutral-0 dark:bg-neutral-2 border border-neutral-3 rounded-[60px] p-10 space-y-8 hover:shadow-2xl transition-shadow group">
               <div className="space-y-3">
                  <h4 className="text-xl font-black text-neutral-11">3. 可证伪锚点：来源与元数据</h4>
                  <p className="text-sm text-neutral-6 font-bold">PM 核心关切：防止幻觉。通过强引证体系，将 AI 输出锚定在客观事实之上，建立有据信任。</p>
               </div>
               
               <div className="p-8 bg-neutral-1 border border-neutral-3 rounded-[40px] h-[220px] flex flex-col justify-center gap-4">
                  <h5 className="text-[11px] font-black text-neutral-4 uppercase tracking-widest px-2">Data Sources (Verified)</h5>
                  <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                     {[
                       { label: '奔驰金融官方库', type: 'Doc', color: 'bg-blue-100 text-blue-600', icon: <FileText size={18}/> },
                       { label: '4S店库存实录网', type: 'API', color: 'bg-green-100 text-green-600', icon: <Globe size={18}/> },
                       { label: '24款奔驰E配置表', type: 'PDF', color: 'bg-orange-100 text-orange-600', icon: <File size={18}/> },
                     ].map((s, i) => (
                       <a key={i} href="#" className="flex items-center gap-3 p-4 bg-neutral-0 dark:bg-neutral-2 border border-neutral-3 rounded-3xl shrink-0 hover:border-brand hover:scale-105 transition-all shadow-sm group">
                          <div className={`w-10 h-10 ${s.color} rounded-xl flex items-center justify-center shrink-0`}>
                             {s.icon}
                          </div>
                          <div className="pr-4">
                             <div className="text-sm font-black text-neutral-11">{s.label}</div>
                             <div className="text-[10px] font-bold text-neutral-4 uppercase mt-0.5">{s.type} Reference</div>
                          </div>
                       </a>
                     ))}
                  </div>
               </div>
            </div>

            {/* Component 4: Ethics / Guardrails */}
            <div className="bg-neutral-0 dark:bg-neutral-2 border border-neutral-3 rounded-[60px] p-10 space-y-8 hover:shadow-2xl transition-shadow group overflow-hidden relative">
               <div className="space-y-3 relative z-10">
                  <h4 className="text-xl font-black text-error">4. 算法熔断：安全与合规深度集成</h4>
                  <p className="text-sm text-neutral-6 font-bold">PM 的红线：将合规能力原子化。当业务逻辑识别到非法输入或模型崩溃漏洞时，UI 必须提供即时的确定性强制跳转。</p>
               </div>
               
               <div className="p-8 bg-neutral-0 dark:bg-neutral-2 border border-error/20 rounded-[40px] h-[220px] flex flex-col justify-center space-y-6 shadow-sm border-dashed">
                  <div className="flex gap-4">
                     <ShieldAlert size={32} className="text-error" />
                     <div className="space-y-4">
                        <p className="text-sm text-neutral-11 font-black leading-relaxed">
                           此回复涉及车辆金融计算，<span className="text-error italic">最终结果以落地银行为准</span>。您的咨询已上报后台实时合规复核。
                        </p>
                        <div className="flex gap-3">
                           <button className="text-[11px] font-black bg-neutral-12 dark:bg-neutral-11 text-neutral-0 px-4 py-2 rounded-xl">转入人工处理</button>
                           <button className="text-[11px] font-black border border-neutral-3 px-4 py-2 rounded-xl">了解合规准则</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 06: Footer Call to Action */}
      <div className="p-20 bg-brand rounded-[100px] text-center space-y-10 relative overflow-hidden group">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
         <motion.div 
           initial={{ scale: 0.8, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           className="relative z-10 space-y-6"
         >
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">从“生成能力”到“确定性产品”</h2>
            <p className="text-white/80 font-bold text-xl max-w-2xl mx-auto leading-relaxed">
               这套标准正在广联业务的全场景中持续进化。作为 AI PM，我们的使命是消除黑盒焦虑，将不确定的算力转化为确定的商业价值。
            </p>
            <div className="flex justify-center gap-6 pt-4">
               <button className="px-12 py-5 bg-neutral-0 dark:bg-neutral-2 text-brand rounded-full font-black text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all">下载全套设计规范</button>
               <button className="px-12 py-5 bg-transparent border-2 border-white/30 text-white rounded-full font-black text-lg hover:bg-white/10 transition-all">联系 UX 设计中心</button>
            </div>
         </motion.div>
      </div>
    </div>
  );
};

const BusinessProcessPreview = () => {
  const [step, setStep] = useState(1); // 1: Login, 2: Scene, 3: Role, 4: Home
  const [isLoading, setIsLoading] = useState(false);
  const [selectedScene, setSelectedScene] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const scenes = [
    { id: 'qg', name: '轻改中心', icon: <Zap size={24} />, desc: '个性化外观与内饰升级', color: 'bg-blue-500' },
    { id: 'yb', name: '延保服务', icon: <Shield size={24} />, desc: '核心产件深度质量担保', color: 'bg-indigo-500' },
    { id: 'qy', name: '车主权益', icon: <Star size={24} />, desc: '积分商城与专属俱乐部', color: 'bg-amber-500' },
    { id: 'esc', name: '二手车汇', icon: <RefreshCw size={24} />, desc: '专业评估与旧车置换', color: 'bg-emerald-500' },
  ];

  const roles = [
    { id: 'yg', name: '门店员工', desc: '执行业务办理与工单录入', icon: <User size={20} /> },
    { id: 'dd', name: '业务督导', desc: '异常监控与业务指标跟进', icon: <Timer size={20} /> },
    { id: 'zg', name: '主管经理', desc: '收支分析与人员考勤管理', icon: <Briefcase size={20} /> },
    { id: 'cg', name: '超级管理员', desc: '全域系统配置与权限下发', icon: <Sparkles size={20} /> },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 1500);
  };

  const selectScene = (name: string) => {
    setSelectedScene(name);
    setStep(3);
  };

  const selectRole = (name: string) => {
    setSelectedRole(name);
    setStep(4);
  };

  return (
    <div className="w-full max-w-[375px] h-[812px] bg-neutral-0 rounded-[32px] lg:rounded-[48px] border-[6px] lg:border-[10px] border-neutral-12 overflow-hidden relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] flex flex-col group transition-all duration-500 scale-[0.85] sm:scale-100 origin-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 40, 0], y: [0, 60, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-80 h-80 bg-brand/30 rounded-full blur-[80px]"
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
          transition={{ duration: 15, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-success/20 rounded-full blur-[80px]"
        />
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div 
            key="login"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative z-10 flex-1 flex flex-col p-8 pt-24"
          >
            <div className="mb-12">
               <div className="w-14 h-14 bg-brand rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl shadow-brand/40">
                  <Zap size={32} fill="currentColor" />
               </div>
               <h1 className="text-3xl font-black text-neutral-12 tracking-tight">欢迎回来</h1>
               <p className="text-neutral-6 text-sm font-medium mt-2">广联业务智慧管理平台 v2.0</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <label className="text-[11px] font-black text-neutral-4 uppercase tracking-widest ml-1">用户名</label>
                <div className="relative group">
                   <User className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-4 group-focus-within:text-brand transition-colors" size={18} />
                   <input 
                     type="text" 
                     placeholder="Admin / User"
                     className="w-full h-14 pl-12 bg-neutral-1 border border-neutral-3 rounded-2xl outline-none focus:border-brand focus:bg-neutral-0 transition-all font-bold text-neutral-11"
                     required
                   />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-black text-neutral-4 uppercase tracking-widest ml-1">访问密码</label>
                <div className="relative group">
                   <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-4 group-focus-within:text-brand transition-colors" size={18} />
                   <input 
                     type="password" 
                     placeholder="••••••••"
                     className="w-full h-14 pl-12 bg-neutral-1 border border-neutral-3 rounded-2xl outline-none focus:border-brand focus:bg-neutral-0 transition-all font-bold text-neutral-11"
                     required
                   />
                </div>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full h-14 bg-brand text-white rounded-2xl font-black text-lg shadow-lg shadow-brand/30 active:scale-95 transition-all flex items-center justify-center gap-3 mt-8"
              >
                {isLoading ? <Loader2 className="animate-spin text-white" /> : '即刻登录'}
              </button>
            </form>

            <div className="mt-6 flex items-center justify-between text-xs font-bold text-neutral-6 px-1">
               <label className="flex items-center gap-2 cursor-pointer">
                  <div className="w-4 h-4 bg-neutral-1 border border-neutral-3 rounded" />
                  记住我
               </label>
               <span className="text-brand hover:underline cursor-pointer">忘记密码?</span>
            </div>

            <div className="mt-auto text-center">
              <span className="text-[11px] text-neutral-6 font-bold tracking-tight">还没有账号？联系管理员获取权限</span>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            key="scene"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="relative z-10 flex-1 flex flex-col p-6 pt-16"
          >
            <div className="mb-8 px-2">
              <h2 className="text-2xl font-black text-neutral-12">选择业务场景</h2>
              <p className="text-neutral-6 text-sm mt-1 font-medium">进入特定的智慧业务操作系统</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {scenes.map((scene, i) => (
                <motion.div
                  key={scene.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => selectScene(scene.name)}
                  className="group relative p-5 bg-neutral-1 border border-neutral-3 rounded-[32px] cursor-pointer hover:bg-neutral-0 hover:border-brand hover:shadow-xl hover:shadow-brand/10 active:scale-[0.98] transition-all flex items-center gap-5"
                >
                  <div className={`w-14 h-14 ${scene.color} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-neutral-10/5 group-hover:scale-110 transition-transform`}>
                    {scene.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-neutral-11 text-base">{scene.name}</h3>
                    <p className="text-[11px] text-neutral-6 font-bold mt-0.5">{scene.desc}</p>
                  </div>
                  <ChevronRight size={18} className="text-neutral-3 group-hover:text-brand transition-colors" />
                </motion.div>
              ))}
            </div>
            
            <button 
              onClick={() => setStep(1)}
              className="mt-6 py-4 text-neutral-4 hover:text-neutral-8 transition-colors flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest"
            >
              退出账号
            </button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div 
            key="role"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 flex-1 flex flex-col p-6 pt-16"
          >
            <div className="mb-10 text-center">
              <div className="w-20 h-20 bg-brand/5 border border-brand/20 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                 <User size={36} className="text-brand" />
                 <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-success rounded-full border-4 border-neutral-0 flex items-center justify-center">
                    <Check size={14} className="text-white" strokeWidth={4} />
                 </div>
              </div>
              <h2 className="text-2xl font-black text-neutral-12">确认操作权限</h2>
              <div className="inline-block px-3 py-1 bg-brand/10 text-brand text-[10px] font-black rounded-full mt-2 uppercase tracking-widest leading-none">{selectedScene} • 广联业务部</div>
            </div>

            <div className="space-y-3">
              {roles.map((role) => (
                 <div
                   key={role.id}
                   onClick={() => selectRole(role.name)}
                   className="flex items-center gap-4 p-5 bg-neutral-1 border border-neutral-3 rounded-[28px] cursor-pointer hover:bg-neutral-0 hover:border-brand transition-all group active:scale-95"
                 >
                    <div className="w-12 h-12 rounded-2xl bg-neutral-2 flex items-center justify-center text-neutral-6 group-hover:bg-brand group-hover:text-white transition-all shadow-sm">
                      {role.icon}
                    </div>
                    <div className="flex-1">
                       <h4 className="font-black text-neutral-11 text-[15px]">{role.name}</h4>
                       <p className="text-[11px] text-neutral-6 font-bold">{role.desc}</p>
                    </div>
                    <div className="w-6 h-6 border-2 border-neutral-3 rounded-full group-hover:border-brand flex items-center justify-center transition-all">
                       <div className="w-3 h-3 bg-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                 </div>
              ))}
            </div>
            
            <button 
              onClick={() => setStep(2)}
              className="mt-auto mb-6 py-4 text-neutral-6 font-black text-xs uppercase tracking-widest hover:text-brand transition-colors flex items-center justify-center gap-2"
            >
              <ChevronLeft size={16} /> 切换业务场景
            </button>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div 
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 flex-1 flex flex-col"
          >
            {/* Mock Dashboard Header */}
            <div className="p-6 pt-12 bg-neutral-12 text-white overflow-hidden relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 blur-3xl rounded-full" />
               <div className="flex justify-between items-center mb-10 relative z-10">
                  <div className="flex items-center gap-4">
                     <div className="w-11 h-11 rounded-2xl bg-brand p-0.5 shadow-lg shadow-brand/20">
                        <img src={`https://ui-avatars.com/api/?name=${selectedRole}&background=347BFF&color=fff`} className="w-full h-full rounded-2xl" />
                     </div>
                     <div>
                        <div className="text-[15px] font-black tracking-tight tracking-wide">早安，张经理</div>
                        <div className="text-[10px] text-neutral-6 font-black opacity-80 uppercase tracking-[0.1em]">{selectedRole} • {selectedScene}</div>
                     </div>
                  </div>
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center relative border border-white/5 active:scale-90 transition-transform">
                     <Bell size={20} />
                     <div className="absolute top-3.5 right-3.5 w-2 h-2 bg-error rounded-full border-2 border-neutral-12 shadow-[0_0_8px_rgba(242,71,36,0.6)]" />
                  </div>
               </div>
               
               <div className="bg-brand/80 p-6 rounded-[32px] border border-white/10 backdrop-blur-md shadow-2xl shadow-brand/20 relative overflow-hidden group">
                  <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
                  <div className="text-[10px] font-black text-white/50 mb-1 uppercase tracking-widest">今日预估营收 (元)</div>
                  <div className="text-3xl font-black tabular-nums tracking-tighter">¥ 14,240.00</div>
                  <div className="mt-5 flex items-center gap-3">
                     <div className="px-2.5 py-1 bg-white/15 text-white text-[11px] rounded-lg font-black flex items-center gap-1.5 backdrop-blur-sm border border-white/10">
                        <ArrowUp size={12} strokeWidth={4} className="text-success" /> 12.5%
                     </div>
                     <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest font-mono">Vs LAST DAY</span>
                  </div>
               </div>
            </div>

            <div className="flex-1 bg-neutral-0 p-6 space-y-8 no-scrollbar overflow-y-auto">
               <div className="flex items-center justify-between">
                  <h3 className="font-black text-neutral-12 text-lg tracking-tight">智能工作台</h3>
                  <span className="text-brand text-xs font-black uppercase tracking-widest px-2 py-1 bg-brand/5 rounded-lg">All Tasks</span>
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: '待处理工单', val: '24', icon: <FileText size={20} />, color: 'bg-brand/10 text-brand' },
                    { label: '业务达成率', val: '86%', icon: <LineChart size={20} />, color: 'bg-emerald-50 text-emerald-500' },
                  ].map((stat, i) => (
                    <div key={i} className="p-5 bg-neutral-1 border border-neutral-2 rounded-[32px] hover:border-brand/30 transition-colors cursor-pointer group">
                       <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>{stat.icon}</div>
                       <div className="text-2xl font-black text-neutral-11 tracking-tight">{stat.val}</div>
                       <div className="text-[11px] font-black text-neutral-6 uppercase tracking-widest mt-0.5">{stat.label}</div>
                    </div>
                  ))}
               </div>

               <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-black text-neutral-12 text-lg tracking-tight">实时业务流</h3>
                    <RefreshCw size={14} className="text-neutral-4" />
                  </div>
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-neutral-1 rounded-2xl border border-neutral-2 hover:bg-neutral-0 transition-all cursor-pointer">
                       <div className="w-12 h-12 rounded-2xl bg-neutral-2 flex items-center justify-center text-brand font-black text-[10px] border border-neutral-3">#{i*12}</div>
                       <div className="flex-1">
                          <div className="text-[14px] font-bold text-neutral-11 leading-tight mb-0.5">精品项目工单已完成签收</div>
                          <div className="text-[10px] text-neutral-4 font-bold uppercase tracking-widest">15:20 • 物流中心 0023</div>
                       </div>
                       <ChevronRight size={14} className="text-neutral-3" />
                    </div>
                  ))}
               </div>
            </div>

            {/* Bottom Nav Mock */}
            <div className="h-[72px] bg-neutral-0 border-t border-neutral-2 flex items-center justify-around px-4 sticky bottom-0 z-20">
               {[
                 { icon: <Home size={22} fill="currentColor" />, color: 'text-brand' },
                 { icon: <FileText size={22} />, color: 'text-neutral-4' },
                 { icon: <Briefcase size={22} />, color: 'text-neutral-4' },
                 { icon: <User size={22} />, color: 'text-neutral-4' },
               ].map((nav, i) => (
                 <div key={i} className={`${nav.color} p-2`}>{nav.icon}</div>
               ))}
            </div>

            <div className="p-8 pb-12 flex justify-center bg-neutral-0">
               <button onClick={() => setStep(1)} className="px-8 py-3 bg-neutral-1 text-neutral-6 font-black text-[10px] uppercase tracking-[0.2em] rounded-full border border-neutral-3 hover:text-error hover:border-error transition-all shadow-sm">Logout Session</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Home Indicator */}
      <div className="h-[34px] w-full flex items-center justify-center absolute bottom-0 bg-transparent z-50 shrink-0 pointer-events-none">
        <div className="w-[134px] h-[5px] bg-neutral-12 rounded-full opacity-10" />
      </div>
    </div>
  );
};

export const BusinessComponentsPreview = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'car'>('login');

  return (
    <div className="space-y-6 lg:space-y-12 pb-20">
      <header className="space-y-4">
         <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand/10 text-brand rounded-full text-[11px] lg:text-[13px] font-bold mb-2">
            <Sparkles size={14} />
            <span>Vertical Business Components</span>
         </div>
         <h1 className="text-2xl lg:text-3xl font-black text-neutral-12 tracking-tight">典型业务组件示例</h1>
         <p className="text-[14px] lg:text-[15px] text-neutral-7 leading-relaxed max-w-3xl font-medium">
            针对汽车全链路生命周期场景，提炼出的高交互、高保真业务逻辑组件。涵盖从登录分流到精准选品的核心体验，支持完美的深浅色适配与动态转场。
         </p>
      </header>

      {/* Tab Selector */}
      <div className="flex p-1 bg-neutral-1 rounded-2xl lg:rounded-[24px] w-full lg:w-fit border border-neutral-3 shadow-inner overflow-x-auto no-scrollbar">
        <button 
          onClick={() => setActiveTab('login')}
          className={`flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 lg:px-8 py-2.5 lg:py-3 rounded-xl lg:rounded-[18px] text-[13px] lg:text-sm font-black transition-all whitespace-nowrap ${activeTab === 'login' ? 'bg-neutral-2 text-brand shadow-lg shadow-brand/10 scale-[1.02]' : 'text-neutral-6 hover:text-neutral-8'}`}
        >
          <Zap size={16} fill={activeTab === 'login' ? 'currentColor' : 'none'} />
          全链路登录流转
        </button>
        <button 
          onClick={() => setActiveTab('car')}
          className={`flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 lg:px-8 py-2.5 lg:py-3 rounded-xl lg:rounded-[18px] text-[13px] lg:text-sm font-black transition-all whitespace-nowrap ${activeTab === 'car' ? 'bg-neutral-2 text-brand shadow-lg shadow-brand/10 scale-[1.02]' : 'text-neutral-6 hover:text-neutral-8'}`}
        >
          <Car size={16} fill={activeTab === 'car' ? 'currentColor' : 'none'} />
          车型选择器
        </button>
      </div>

      <motion.div 
        key={activeTab}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center justify-center bg-neutral-1 p-4 lg:p-12 rounded-[32px] lg:rounded-[48px] overflow-hidden relative border border-neutral-2 min-h-[700px] lg:min-h-[900px]"
      >
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(var(--brand-rgb,52,123,255),0.03),transparent_70%)]" />
         
         <div className="relative z-10 w-full flex flex-col items-center">
            {activeTab === 'login' ? (
              <div className="space-y-10 w-full flex flex-col items-center">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-black text-neutral-12">智慧业务登录 · 完整流转演示</h3>
                  <p className="text-sm text-neutral-6 font-bold">账号登录 → 业务分流 → 角色定岗 → 业务首页</p>
                </div>
                <BusinessProcessPreview />
              </div>
            ) : (
              <div className="space-y-10 w-full flex flex-col items-center">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-black text-neutral-12">智能车型库 · 联动选择演示</h3>
                  <p className="text-sm text-neutral-6 font-bold">品牌索引 → 车系筛选 → 车型配置 → 快速确认</p>
                </div>
                <VehicleSelectorDemo />
              </div>
            )}
         </div>
      </motion.div>
    </div>
  );
};

const VehicleSelectorDemo = () => {
  const [step, setStep] = useState(1);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedSeries, setSelectedSeries] = useState<string | null>(null);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  
  const [brandView, setBrandView] = useState('guess'); // 'guess', 'hot', 'history'
  const [modelYear, setModelYear] = useState('all');

  const VEHICLE_DATA = {
    'A': [
      { name: '奥迪', icon: '⭕', series: {
        '奥迪S': ['奥迪A3', '奥迪A4L', '奥迪A6L', '奥迪Q3', '奥迪Q5L'],
        '奥迪RS': ['奥迪RS 4', '奥迪RS 6', '奥迪RS 7'],
        '奥迪(进口)': ['奥迪A8L', '奥迪Q7', '奥迪Q8']
      }},
      { name: '阿维塔', icon: '📐', series: {
        '阿维塔': ['阿维塔11', '阿维塔12']
      }},
      { name: '埃安', icon: '🔋', series: {
        '广汽埃安': ['AION S', 'AION V', 'AION Y', 'AION LX']
      }},
      { name: '阿斯顿·马丁', icon: '🐎', series: {
        '阿斯顿·马丁': ['Vantage', 'DB12', 'DBS', 'DBX']
      }},
    ],
    'B': [
      { name: '宝马', icon: '🏎️', series: {
        '华晨宝马': ['宝马1系', '宝马3系', '宝马5系', '宝马X1', '宝马X3'],
        '宝马M': ['宝马M2', '宝马M3', '宝马M4', '宝马M5'],
        '宝马(进口)': ['宝马7系', '宝马X5(进口)', '宝马X7']
      }},
      { name: '奔驰', icon: '🚘', series: {
        '北京奔驰': ['奔驰A级', '奔驰C级', '奔驰E级', '奔驰GLA', '奔驰GLC'],
        '梅赛德斯-AMG': ['AMG C 43', 'AMG E 53', 'AMG G 63'],
        '奔驰(进口)': ['奔驰S级', '奔驰GLE', '奔驰GLS']
      }},
      { name: '保时捷', icon: '🚙', series: {
        '保时捷': ['Taycan', 'Panamera', 'Macan', 'Cayenne', '911', '718']
      }},
      { name: '本田', icon: '🏎️', series: {
        '广汽本田': ['飞度', '雅阁', '皓影', '奥德赛'],
        '东风本田': ['思域', '英仕派', 'CR-V', '艾力绅']
      }},
      { name: '比亚迪', icon: '⚡', series: {
        '王朝网': ['秦PLUS', '汉', '唐', '宋Pro'],
        '海洋网': ['海鸥', '海豚', '海豹', '驱逐舰05'],
        '腾势': ['腾势D9', '腾势N7']
      }},
    ],
    'C': [
      { name: '长安', icon: '🛸', series: {
        '长安汽车': ['逸动', 'UNI-V', 'CS75 PLUS', 'CS55 PLUS'],
        '深蓝汽车': ['深蓝SL03', '深蓝S7']
      }},
      { name: '凯迪拉克', icon: '🛡️', series: {
        '上汽通用凯迪拉克': ['CT4', 'CT5', 'CT6', 'XT4', 'XT5', 'XT6']
      }},
    ],
    'D': [
      { name: '大众', icon: '🚙', series: {
        '一汽-大众': ['宝来', '速腾', '迈腾', '探岳'],
        '上汽大众': ['朗逸', '帕萨特', '途观L', '途昂']
      }},
    ]
  };

  const handleSelectBrand = (brandName: string) => {
    setSelectedBrand(brandName);
    setStep(2);
  };
  
  const handleSelectSeries = (seriesName: string) => {
    setSelectedSeries(seriesName);
    setStep(3);
  };

  const currentBrandData = useMemo(() => {
    if (!selectedBrand) return null;
    for (const letter in VEHICLE_DATA) {
      const brand = (VEHICLE_DATA as any)[letter].find((b: any) => b.name === selectedBrand);
      if (brand) return brand;
    }
    return null;
  }, [selectedBrand]);

  const currentSeriesModels = useMemo(() => {
    if (!currentBrandData || !selectedSeries) return [];
    return currentBrandData.series[selectedSeries] || [];
  }, [currentBrandData, selectedSeries]);

  const handleBack = () => {
    if (step === 3) setStep(2);
    else if (step === 2) setStep(1);
  };

  const toggleModel = (model: string) => {
    if (selectedModels.includes(model)) {
      setSelectedModels(selectedModels.filter(m => m !== model));
    } else {
      setSelectedModels([...selectedModels, model]);
    }
  };

  const brandListRef = useRef<HTMLDivElement>(null);

  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`brand-letter-${letter}`);
    if (element && brandListRef.current) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full max-w-[375px] h-[812px] bg-neutral-0 rounded-[32px] lg:rounded-[40px] border-[6px] lg:border-[8px] border-neutral-12 overflow-hidden relative shadow-2xl shrink-0 flex flex-col items-stretch text-left scale-[0.85] sm:scale-100 origin-center">
      {/* Status Bar */}
      <div className="h-11 flex justify-between items-center px-6 text-[14px] font-bold z-10 sticky top-0 bg-neutral-0 shrink-0">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-3 bg-neutral-12 rounded-sm" />
          <div className="w-3 h-3 bg-neutral-12 rounded-full" />
          <div className="w-5 h-3 bg-neutral-12 rounded-sm" />
        </div>
      </div>
      
      {/* Header */}
      <div className="h-14 flex items-center justify-between px-4 sticky top-11 bg-neutral-0 z-10 shrink-0">
        <button className="w-8 h-8 flex items-center justify-center -ml-2" onClick={step > 1 ? handleBack : undefined}>
          {step > 1 ? <ChevronLeft size={24} className="text-neutral-12"/> : <div className="w-8" />}
        </button>
        <span className="text-[17px] font-bold flex-1 text-center">
          {step === 1 ? '选择品牌' : step === 2 ? '选择车系' : '选择车型'}
        </span>
        <div className="flex items-center gap-2">
           <div className="px-2 h-7 bg-neutral-0 border border-neutral-3 flex items-center justify-center rounded-full gap-2 text-neutral-12">
              <MoreHorizontal size={16} />
              <div className="w-px h-3 bg-neutral-3" />
              <Circle size={16} />
           </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden relative bg-neutral-0 pb-6 flex text-neutral-12">
        <motion.div 
           initial={{ x: 0 }} 
           animate={{ x: step > 1 ? -60 : 0, opacity: step > 1 ? 0.5 : 1 }} 
           className="w-[359px] shrink-0 h-full overflow-y-auto no-scrollbar"
           ref={brandListRef}
        >
            <div className="px-4 py-2 flex items-center gap-4 text-[13px] border-b border-transparent">
              <span className={`font-bold transition-colors ${brandView === 'guess' ? 'text-neutral-12' : 'text-neutral-6'}`} onClick={() => setBrandView('guess')}>猜你喜欢</span>
              <span className="text-neutral-3">|</span>
              <span className={`font-bold transition-colors ${brandView === 'hot' ? 'text-neutral-12' : 'text-neutral-6'}`} onClick={() => setBrandView('hot')}>热门品牌</span>
              <span className="text-neutral-3">|</span>
              <span className={`font-bold transition-colors ${brandView === 'history' ? 'text-neutral-12' : 'text-neutral-6'}`} onClick={() => setBrandView('history')}>浏览历史</span>
            </div>
            
            <div className="px-4 py-4 grid grid-cols-5 gap-y-6">
               {[
                 { name: '保时捷', icon: '🚙' }, { name: '奔驰', icon: '🚘' }, { name: '宝马', icon: '🏎️' }, { name: '奥迪', icon: '🚓' }, { name: '特斯拉', icon: '🔋' },
                 { name: '大众', icon: '🚙' }, { name: '比亚迪', icon: '⚡' }, { name: '丰田', icon: '🚐' }, { name: '蔚来', icon: '🏎️' }, { name: '理想', icon: '🏠' }
               ].map((b, i) => (
                 <div key={i} className="flex flex-col items-center gap-2 cursor-pointer transition-transform active:scale-95" onClick={() => handleSelectBrand(b.name)}>
                    <div className="w-10 h-10 flex items-center justify-center text-3xl">{b.icon}</div>
                    <span className="text-[11px] text-neutral-8 text-center truncate w-full">{b.name}</span>
                 </div>
               ))}
            </div>

            {Object.entries(VEHICLE_DATA).map(([letter, brands]) => (
              <div key={letter} id={`brand-letter-${letter}`}>
                <div className="bg-neutral-1 px-4 py-2 text-[12px] font-bold text-neutral-6 flex items-center justify-between sticky top-0 z-[5]">
                   <span>{letter}</span>
                </div>
                <div className="px-4 py-1">
                   {brands.map((brand, i) => (
                     <div key={i} className="flex items-center gap-4 py-3.5 border-b border-neutral-1/50 last:border-0 cursor-pointer active:bg-neutral-1 transition-colors" onClick={() => handleSelectBrand(brand.name)}>
                        <div className="w-9 h-9 rounded-full bg-neutral-0 dark:bg-neutral-2 flex items-center justify-center text-lg shadow-sm border border-neutral-2 shrink-0 overflow-hidden">
                          {brand.icon}
                        </div>
                        <span className="text-[15px] font-medium text-neutral-10">{brand.name}</span>
                     </div>
                   ))}
                </div>
              </div>
            ))}
            <div className="h-20" />
        </motion.div>

        {/* Alphabet Scroller */}
        <div className={`fixed right-1 top-[20%] bottom-[10%] flex flex-col justify-between text-[11px] items-center text-neutral-6 font-bold transition-opacity py-4 z-10 w-6 ${step > 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
           {Object.keys(VEHICLE_DATA).map(l => (
             <span 
               key={l} 
               className="hover:text-brand cursor-pointer p-0.5 active:scale-125 transition-all"
               onClick={() => scrollToLetter(l)}
             >
               {l}
             </span>
           ))}
           <span className="text-[8px]">#</span>
        </div>

        {/* Step 2 Drawer */}
        <motion.div 
           initial={{ x: 375 }} 
           animate={{ x: step >= 2 ? 65 : 375 }} 
           transition={{ type: 'spring', bounce: 0, duration: 0.35 }}
           className="absolute top-0 right-0 bottom-0 w-[310px] bg-neutral-0 z-20 overflow-y-auto shadow-[-10px_0_30px_rgba(0,0,0,0.1)] border-l border-neutral-2"
        >
            <div className="flex items-center gap-3 px-4 py-4 border-b border-neutral-2 bg-neutral-0 sticky top-0 font-bold z-10">
               <div className="w-7 h-7 rounded-full bg-neutral-1 flex items-center justify-center text-base border border-neutral-2 shrink-0">
                 {currentBrandData?.icon || '🚗'}
               </div>
               <span className="text-[16px] truncate font-black tracking-tight">{selectedBrand}</span>
            </div>
            
            {currentBrandData && Object.entries(currentBrandData.series).map(([cat, seriesList]: [string, any]) => (
              <div key={cat}>
                <div className="bg-neutral-1 px-4 py-2 text-[12px] font-bold text-neutral-6 uppercase tracking-wider">{cat}</div>
                <div className="px-4">
                  {(seriesList as string[]).map(s => (
                    <div key={s} className="flex items-center justify-between py-4 border-b border-neutral-1/50 last:border-0 cursor-pointer group active:bg-neutral-1 transition-colors" onClick={() => handleSelectSeries(s)}>
                       <div className="flex items-center gap-3 overflow-hidden">
                          <div className={`w-9 h-7 rounded-lg flex items-center justify-center text-sm shrink-0 transition-colors ${cat.includes('RS') || cat.includes('M') ? 'bg-red-50 text-red-500' : 'bg-neutral-1 text-neutral-6'} group-hover:bg-brand group-hover:text-white`}>🚘</div>
                          <span className="text-[14px] font-bold text-neutral-10 truncate">{s}</span>
                       </div>
                       <ChevronRight size={16} className="text-neutral-3 group-hover:text-brand transition-all" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="h-20" />
        </motion.div>
      </div>

      {/* Step 3 Full Drawer */}
      <AnimatePresence>
      {step === 3 && (
         <motion.div 
           initial={{ x: 375 }} 
           animate={{ x: 0 }} 
           exit={{ x: 375 }}
           transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
           className="absolute inset-x-0 bottom-0 h-[700px] bg-neutral-0 z-30 flex flex-col shadow-[-10px_0_40px_rgba(0,0,0,0.15)] border-t border-neutral-2 rounded-t-[32px] overflow-hidden"
         >
            {/* Model header with car icon */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-2 shrink-0">
               <div className="flex items-center gap-3">
                 <div className="w-12 h-6 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-[12px]">🏎️</div>
                 <div className="flex flex-col">
                   <span className="text-[15px] font-black tracking-tight">{selectedSeries}</span>
                   <span className="text-[10px] text-neutral-6 font-bold uppercase">Select Model Configuration</span>
                 </div>
               </div>
               <button onClick={handleBack} className="p-2 bg-neutral-1 rounded-full"><X size={18} /></button>
            </div>
            
            <div className="flex items-center overflow-x-auto px-4 py-3 gap-3 shrink-0 border-b border-neutral-1 no-scrollbar text-[12px] bg-neutral-1/30">
               <div onClick={()=>setModelYear('all')} className={`px-4 py-1.5 cursor-pointer rounded-full font-bold shrink-0 transition-all ${modelYear === 'all' ? 'bg-brand text-white shadow-md shadow-brand/20' : 'text-neutral-6 bg-neutral-0 border border-neutral-2'}`}>全部年款</div>
               <div onClick={()=>setModelYear('2025')} className={`px-4 py-1.5 cursor-pointer rounded-full font-bold shrink-0 transition-all ${modelYear === '2025' ? 'bg-brand text-white shadow-md shadow-brand/20' : 'text-neutral-6 bg-neutral-0 border border-neutral-2'}`}>2025款</div>
               <div onClick={()=>setModelYear('2024')} className={`px-4 py-1.5 cursor-pointer rounded-full font-bold shrink-0 transition-all ${modelYear === '2024' ? 'bg-brand text-white shadow-md shadow-brand/20' : 'text-neutral-6 bg-neutral-0 border border-neutral-2'}`}>2024款</div>
               <div onClick={()=>setModelYear('2023')} className={`px-4 py-1.5 cursor-pointer rounded-full font-bold shrink-0 transition-all ${modelYear === '2023' ? 'bg-brand text-white shadow-md shadow-brand/20' : 'text-neutral-6 bg-neutral-0 border border-neutral-2'}`}>2023款</div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-2 no-scrollbar bg-neutral-1/10">
               <div className="py-2">
                 {currentSeriesModels.length > 0 ? (
                   <>
                     <div className="flex items-center justify-between py-4 px-1 font-black text-neutral-12 text-[14px]">
                        <span>{modelYear === 'all' ? '全部车型' : `${modelYear}款车型`}</span>
                        <span className="text-neutral-4 text-[10px] uppercase">Available models</span>
                     </div>
                     {currentSeriesModels.map((m: string) => {
                        const isSelected = selectedModels.includes(m);
                        return (
                          <div key={m} className={`flex items-center justify-between p-4 mb-2 rounded-2xl border transition-all cursor-pointer ${isSelected ? 'bg-brand/5 border-brand ring-1 ring-brand/10 shadow-sm' : 'bg-neutral-0 border-neutral-2 hover:border-brand/40'}`} onClick={() => toggleModel(m)}>
                             <div className="flex flex-col gap-0.5">
                                <span className={`text-[13px] font-bold ${isSelected ? 'text-brand' : 'text-neutral-11'}`}>{m}</span>
                                <span className="text-[10px] text-neutral-6 font-medium">官方指导价: -- 万</span>
                             </div>
                             <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${isSelected ? 'bg-brand border-brand text-white scale-110' : 'border-neutral-3 bg-neutral-0'}`}>
                                {isSelected && <Check size={12} strokeWidth={4} />}
                             </div>
                          </div>
                        );
                     })}
                   </>
                 ) : (
                   <div className="flex flex-col items-center justify-center h-40 text-neutral-4 gap-2">
                      <Car size={32} strokeWidth={1.5} />
                      <span className="text-sm font-medium">暂无车型数据</span>
                   </div>
                 )}
               </div>
            </div>

            {/* Footer */}
            <div className="p-5 border-t border-neutral-2 bg-neutral-0 flex gap-4 shrink-0 pb-12 shadow-[0_-10px_20px_rgba(var(--brand-rgb,52,123,255),0.02)]">
               <button className="flex-1 bg-neutral-1 text-neutral-12 font-black h-12 rounded-2xl text-[14px] active:scale-95 transition-all border border-neutral-2 shadow-sm" onClick={() => setSelectedModels([])}>
                 重置
               </button>
               <button className="flex-[2] bg-brand text-white font-black h-12 rounded-2xl text-[14px] shadow-lg shadow-brand/25 active:scale-95 transition-all flex items-center justify-center gap-2">
                 确定{selectedModels.length > 0 ? `(${selectedModels.length})` : ''}
               </button>
            </div>
         </motion.div>
      )}
      </AnimatePresence>

      {/* Home Indicator */}
      <div className="h-[34px] w-full flex items-center justify-center absolute bottom-0 bg-transparent z-40 shrink-0 pointer-events-none">
        <div className="w-[134px] h-[5px] bg-neutral-12 rounded-full" />
      </div>
    </div>
  );
};