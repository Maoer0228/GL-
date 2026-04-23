import React from 'react';
import {
  CalendarDays,
  ListTree,
  Clock,
  FormInput,
  Type,
  MousePointerClick,
  Search,
  PlusSquare,
  ToggleRight,
  AlignLeft,
  UploadCloud,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const inputComponents = [
  { name: 'Calendar', label: '日历', desc: '按照日历形式展示数据或日期的容器', icon: CalendarDays },
  { name: 'Cascader', label: '级联选择器', desc: '级联选择器适用于有清晰层级结构的数据集合，用户可以通过逐级查看并选择。', icon: ListTree },
  { name: 'DateTimePicker', label: '时间选择器', desc: '用于选择一个时间点或者一个时间段', icon: Clock },
  { name: 'Form', label: '表单', desc: '用以收集、校验和提交数据，一般由输入框、单选框、复选框、选择器等控件组成。', icon: FormInput },
  { name: 'Input', label: '输入框', desc: '用于单行文本信息输入', icon: Type },
  { name: 'Picker', label: '选择器', desc: '用于一组预设数据中的选择', icon: MousePointerClick },
  { name: 'Search', label: '搜索框', desc: '用于用户输入搜索信息，并进行页面内容搜索', icon: Search },
  { name: 'Stepper', label: '步进器', desc: '用于数量的增减', icon: PlusSquare },
  { name: 'Switch', label: '开关', desc: '用于控制某个功能状态的的开启或关闭', icon: ToggleRight },
  { name: 'Textarea', label: '多行文本框', desc: '用于多行文本的输入', icon: AlignLeft },
  { name: 'Upload', label: '上传', desc: '用于相册读取或拉起拍照的图片上传功能。', icon: UploadCloud },
];

export const InputSection = () => {
  return (
    <div className="space-y-8 animate-slide-up pb-20">
      <div className="mb-6">
         <div className="bg-white p-8 rounded-[24px] border border-neutral-3 flex items-center justify-between shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 right-[-10%] w-[40%] h-[150%] bg-gradient-to-l from-brand/5 to-transparent skew-x-[-20deg]" />
            <div className="relative z-10 space-y-2 max-w-2xl">
               <h3 className="text-2xl font-black text-neutral-12 tracking-tight">输入类组件 Input Components</h3>
               <p className="text-sm text-neutral-7 leading-relaxed font-medium">收集用户各种形式的输入信息，在设计中必须注重容错处理、清晰的边界反馈及高效的数据录入体验。</p>
            </div>
            <div className="hidden md:flex gap-2 relative z-10">
               <div className="w-1.5 h-1.5 rounded-full bg-brand/30" />
               <div className="w-1.5 h-1.5 rounded-full bg-brand/60" />
               <div className="w-1.5 h-1.5 rounded-full bg-brand" />
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {inputComponents.map((item, idx) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="group relative bg-white border border-neutral-3 rounded-[24px] p-6 hover:shadow-[0_20px_40px_-15px_rgba(52,123,255,0.08)] hover:border-brand/40 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer active:scale-[0.98]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="flex items-start justify-between mb-5 relative z-10">
              <div className="w-12 h-12 bg-neutral-1 group-hover:bg-brand text-neutral-8 group-hover:text-white rounded-[16px] flex items-center justify-center transition-all duration-300 shadow-sm border border-neutral-2 group-hover:border-brand group-hover:shadow-lg group-hover:shadow-brand/20">
                <item.icon size={22} strokeWidth={2} />
              </div>
              <div className="bg-neutral-1 px-3 py-1 rounded-full border border-neutral-2 group-hover:bg-white transition-colors">
                 <span className="text-[10px] font-black text-neutral-5 group-hover:text-neutral-8 uppercase tracking-widest transition-colors">{item.name}</span>
              </div>
            </div>
            
            <div className="relative z-10 flex-1 flex flex-col">
              <h3 className="text-[17px] font-extrabold text-neutral-11 mb-2 tracking-tight group-hover:text-brand transition-colors">
                {item.label}
              </h3>
              <p className="text-[13px] text-neutral-6 group-hover:text-neutral-8 leading-relaxed flex-1 font-medium transition-colors">
                {item.desc}
              </p>
            </div>
            
            <div className="mt-5 pt-4 border-t border-neutral-2 flex items-center justify-between opacity-50 group-hover:opacity-100 transition-all duration-300">
              <span className="text-[11px] font-black text-brand uppercase tracking-widest">交互规范</span>
              <div className="w-7 h-7 rounded-full bg-brand/5 flex items-center justify-center text-brand transform group-hover:translate-x-1 group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-sm">
                <ChevronRight size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
