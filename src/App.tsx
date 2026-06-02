/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { 
  ChevronRight, 
  Palette, 
  Type, 
  Box, 
  Layers, 
  Zap, 
  Activity,
  Target,
  ArrowUpRight,
  Sparkles,
  Eraser,
  Edit3,
  ThumbsUp,
  RefreshCw,
  Mic,
  ShieldAlert,
  Menu, 
  X,
  CreditCard as CreditCardIcon,
  Layout as LayoutIcon,
  Smile,
  ShieldCheck,
  Smartphone,
  Info,
  CircleAlert,
  CircleCheck,
  ChevronLeft,
  CheckSquare,
  Circle,
  ToggleRight,
  Tag as TagIcon,
  Plus,
  LayoutPanelLeft,
  PanelsTopBottom,
  AlignJustify,
  Bell,
  Search,
  MoreHorizontal,
  Home,
  User,
  Settings,
  MessageSquare,
  CheckCircle2,
  Loader2,
  Trash2,
  LogOut,
  Map,
  Calendar,
  Camera,
  Globe,
  Car,
  Download,
  Copy,
  Sliders,
  Maximize2,
  Maximize,
  LayoutPanelTop,
  MoveRight,
  Filter,
  Check,
  Eye,
  Settings2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Mail,
  PhoneCall,
  BellRing,
  Lock,
  Unlock,
  Save,
  Briefcase,
  Gift,
  Heart,
  Star,
  ThumbsDown,
  Share2,
  Link,
  Edit,
  FileText,
  Folder,
  Image as ImageIcon,
  Music,
  Video,
  Play,
  Pause,
  Cloud,
  Wifi,
  Battery,
  Send,
  ShoppingCart,
  UserPlus,
  UserMinus,
  Settings as SettingsIcon,
  Trash,
  Search as SearchIcon,
  Clock,
  Calendar as CalendarIcon,
  MapPin,
  Wand2,
  Bot,
  Cpu,
  Atom,
  Brain,
  Lightbulb,
  Orbit,
  CircuitBoard,
  Waves,
  Shield,
  Dna,
  Command,
  Fingerprint,
  HelpCircle,
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Moon,
  Sun
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InputSection } from './InputSection';
import { 
  CalendarPreview, 
  CascaderPreview, 
  DateTimePickerPreview, 
  FormPreview, 
  PickerPreview, 
  SearchPreview, 
  StepperPreview, 
  TextareaPreview, 
  UploadPreview, 
  InputPreview, 
  SwitchPreview, 
  CheckboxPreview,
  RadioPreview,
  AvatarPreview,
  BadgePreview,
  ButtonGroupPreview,
  TagPreview,
  CellPreview,
  CollapsePreview,
  CountDownPreview,
  EmptyPreview,
  GridPreview,
  SwiperPreview,
  LoadingPreview,
  PopupPreview,
  ToastPreview,
  DialogPreview,
  DropdownMenuPreview,
  MessagePreview,
  SwipeCellPreview,
  FabPreview,
  DrawerPreview,
  TabBarPreview,
  TabsPreview,
  SideBarPreview,
  SliderPreview,
  RatePreview,
  IndexesPreview,
  BackTopPreview,
  ImagePreview,
  PullDownRefreshPreview,
  AIDesignPreview,
  BusinessComponentsPreview,
  IndexBarPreview,
  ProgressBarPreview,
  LayoutSystemPreview,
  LineSystemPreview,
  ShadowSystemPreview,
  GuidePreview
} from './InteractivePreviews';

// --- Types ---
type Tab = 'visual' | 'layout' | 'lines_shadows' | 'icons' | 'components' | 'business_components' | 'input' | 'feedback' | 'motion' | 'prototype' | 'ai_design';

// --- Design System Sections ---

const ColorSection = ({ brandColor, onColorChange }: { brandColor: string; onColorChange: (color: string) => void }) => {
  const brandLight = useMemo(() => {
    // Simple light version calculation (roughly)
    return brandColor + '20'; // Using alpha for light version in CSS if possible, but for static display we calculate
  }, [brandColor]);

  return (
    <div className="space-y-8 animate-slide-up">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-neutral-11">品牌色 Brand</h3>
          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-6">自定义品牌色:</span>
            <input 
              type="color" 
              value={brandColor} 
              onChange={(e) => onColorChange(e.target.value)}
              className="w-8 h-8 rounded-lg cursor-pointer border-none p-0 overflow-hidden shadow-sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { name: 'Brand Main', hex: brandColor, class: 'bg-brand' },
            { name: 'Brand Light', hex: brandLight, class: 'bg-brand-light' },
            { name: 'Brand Dark', hex: 'Derived', class: 'bg-brand-dark' },
          ].map((c) => (
            <div key={c.name} className="p-4 rounded-lg bg-neutral-1 shadow-sm border border-neutral-3">
              <div className={`h-16 w-full rounded-md mb-2 ${c.class}`} style={c.name === 'Brand Main' ? { backgroundColor: brandColor } : {}} />
              <div className="text-sm font-medium">{c.name}</div>
              <div className="text-xs text-neutral-8">{c.name === 'Brand Main' ? c.hex : 'Auto'}</div>
            </div>
          ))}
        </div>
      </div>
    
    <div>
      <h3 className="text-lg font-semibold mb-4 text-neutral-11">辅助色 Semantic</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { id: 'C1', name: '链接文本', hex: '#185EFE', desc: '编辑状态/链接', class: 'bg-[#185EFE]' },
          { id: 'C13', name: '成功状态', hex: '#27CD5A', desc: '成功/完成', class: 'bg-[#27CD5A]' },
          { id: 'C12', name: '醒目提示', hex: '#F47F13', desc: '草稿/醒目数字', class: 'bg-[#F47F13]' },
          { id: 'C11', name: '异常状态', hex: '#EE3140', desc: '错误/危险', class: 'bg-[#EE3140]' },
        ].map((c) => (
          <div key={c.id} className="p-4 rounded-lg bg-neutral-0 shadow-sm border border-neutral-3">
            <div className={`h-12 w-full rounded-md mb-2 ${c.class}`} />
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-black text-brand bg-brand/10 px-1.5 rounded">{c.id}</span>
              <span className="text-xs text-neutral-8 font-mono">{c.hex}</span>
            </div>
            <div className="text-sm font-bold text-neutral-11">{c.name}</div>
            <div className="text-[11px] text-neutral-6 line-clamp-1">{c.desc}</div>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4 text-neutral-11">中性色 Neutral</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { id: 'C2', name: '一级内容', hex: '#333333', desc: '大标题/正文', class: 'bg-[#333333]' },
          { id: 'C3', name: '辅助内容', hex: '#666666', desc: '正文/次级', class: 'bg-[#666666]' },
          { id: 'C4', name: '描述文本', hex: '#999999', desc: 'icon/导航', class: 'bg-[#999999]' },
          { id: 'C5', name: '禁用文本', hex: '#CCCCCC', desc: '禁用/占位', class: 'bg-[#CCCCCC]' },
          { id: 'C6', name: '背景底色', hex: '#EFF3F6', desc: '页面基色', class: 'bg-[#EFF3F6]' },
          { id: 'C7', name: '纯净白', hex: '#FFFFFF', desc: '内容底色', class: 'bg-[#FFFFFF]' },
          { id: 'C8', name: '区块背色', hex: '#F5F9FF', desc: '导航栏背景', class: 'bg-[#F5F9FF]' },
          { id: 'C9', name: '分割线色', hex: '#E6EBF5', desc: '线条/边框', class: 'bg-[#E6EBF5]' },
        ].map((c) => (
          <div key={c.id} className="p-3 rounded-lg bg-neutral-0 shadow-sm border border-neutral-3">
            <div className={`h-10 w-full rounded-md mb-2 border border-neutral-2 ${c.class}`} />
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] font-black text-neutral-8 bg-neutral-1 px-1 rounded">{c.id}</span>
              <span className="text-[10px] text-neutral-6 font-mono">{c.hex}</span>
            </div>
            <div className="text-[13px] font-bold text-neutral-11">{c.name}</div>
            <div className="text-[10px] text-neutral-6 truncate">{c.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

const TypographySection = () => (
  <div className="space-y-8 animate-slide-up">
    <div className="p-8 bg-neutral-1 rounded-3xl border border-neutral-3 shadow-xl shadow-neutral-10/5">
      <div className="flex flex-wrap gap-12 mb-12 border-b border-neutral-2 pb-8">
        <div className="space-y-1">
          <div className="text-neutral-4 text-[13px] font-bold">中文文本</div>
          <div className="text-4xl font-['PingFang_SC','Hiragino_Sans_GB','Microsoft_YaHei'] text-neutral-12">简体中文</div>
          <div className="text-neutral-6 text-xs">PingFang SC</div>
        </div>
        <div className="space-y-1">
          <div className="text-neutral-4 text-[13px] font-bold">数字展示 (金额/数值)</div>
          <div className="text-4xl font-mono text-neutral-12 tracking-tight">0123456789</div>
          <div className="text-neutral-6 text-xs italic">DIN Alternate / JetBrains Mono</div>
        </div>
        <div className="space-y-1">
          <div className="text-neutral-4 text-[13px] font-bold">英文文本</div>
          <div className="text-4xl text-neutral-12">ABCDEFGH</div>
          <div className="text-neutral-6 text-xs">Helvetica / Inter</div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-neutral-1">
              <th className="px-4 py-3 text-[13px] font-black text-neutral-6 uppercase">代号</th>
              <th className="px-4 py-3 text-[13px] font-black text-neutral-6 uppercase">标准字</th>
              <th className="px-4 py-3 text-[13px] font-black text-neutral-6 uppercase text-center">设计字号</th>
              <th className="px-4 py-3 text-[13px] font-black text-neutral-6 uppercase text-center">iOS/Android</th>
              <th className="px-4 py-3 text-[13px] font-black text-neutral-6 uppercase">使用场景</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-2">
            {[
              { id: 'T28', weight: 'font-medium', size: '28px', ios: '14pt', android: '14sp', scene: '结果页大标题/数值展示', cls: 'text-[28px]' },
              { id: 'T24', weight: 'font-medium', size: '24px', ios: '12pt', android: '12sp', scene: '大标题 Medium', cls: 'text-[24px]' },
              { id: 'T20', weight: 'font-medium', size: '20px', ios: '10pt', android: '10sp', scene: '一级标题 / 标准标题', cls: 'text-[20px]' },
              { id: 'T18', weight: 'font-medium', size: '18px', ios: '9pt', android: '9sp', scene: '二级标题 / 输入框文案', cls: 'text-[18px]' },
              { id: 'T16', weight: 'font-normal', size: '16px', ios: '8pt', android: '8sp', scene: '正文内容 / 输入反馈', cls: 'text-[16px]' },
              { id: 'T14', weight: 'font-normal', size: '14px', ios: '7pt', android: '7sp', scene: '描述文本 / 辅助说明', cls: 'text-[14px]' },
              { id: 'T12', weight: 'font-normal', size: '12px', ios: '6pt', android: '6sp', scene: '角标字号 / 标签栏辅助', cls: 'text-[12px]' },
              { id: 'T11', weight: 'font-normal', size: '11px', ios: '6pt', android: '6sp', scene: '底部标签栏极小文字', cls: 'text-[11px]' },
            ].map((row, idx) => (
              <tr key={idx} className="group hover:bg-brand/5 transition-colors">
                <td className="px-4 py-4"><span className="text-[12px] font-black text-brand bg-brand/10 px-2 py-0.5 rounded">{row.id}</span></td>
                <td className="px-4 py-4"><span className={`${row.cls} ${row.weight} text-neutral-11 whitespace-nowrap`}>字样展示</span></td>
                <td className="px-4 py-4 text-center font-mono text-[13px] text-neutral-6">{row.size}</td>
                <td className="px-4 py-4 text-center">
                   <div className="flex flex-col gap-0.5">
                      <span className="text-[10px] text-neutral-4 leading-none">iOS: {row.ios}</span>
                      <span className="text-[10px] text-neutral-4 leading-none">An: {row.android}</span>
                   </div>
                </td>
                <td className="px-4 py-4 text-[13px] text-neutral-8">{row.scene}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 flex items-center gap-8 border-t border-neutral-2 pt-8">
        <div>
          <div className="text-neutral-4 text-[11px] font-bold uppercase mb-2">Regular 400</div>
          <div className="text-2xl font-normal text-neutral-11">文本样式 400</div>
        </div>
        <div>
          <div className="text-neutral-4 text-[11px] font-bold uppercase mb-2">Medium 500</div>
          <div className="text-2xl font-medium text-neutral-11">文本样式 500</div>
        </div>
        <div>
          <div className="text-neutral-4 text-[11px] font-bold uppercase mb-2">Bold 700</div>
          <div className="text-2xl font-bold text-neutral-11">文本样式 700</div>
        </div>
      </div>
    </div>
  </div>
);

// --- Component Documentation Structure ---

const ComponentPreview = ({ children, title, fullBleed = false, hideHeader = false }: { children: React.ReactNode; title?: string; fullBleed?: boolean; hideHeader?: boolean }) => {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      const vh = window.innerHeight;
      const headerHeight = 72; // Header height
      const padding = 60; // Top/bottom padding (reduced for better space usage)
      const availableHeight = vh - headerHeight - padding;
      const phoneHeight = 832 + 60; // Mockup height + pagination indicators

      if (availableHeight < phoneHeight) {
        setScale(Math.max(0.4, availableHeight / phoneHeight));
      } else {
        setScale(1);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div className="shrink-0 hidden lg:block select-none z-10 transition-transform duration-300 ease-out origin-top-right"
         style={{ transform: `scale(${scale})` }}>
      <div 
        ref={containerRef}
        className="w-[395px]"
      >
        {/* External Frame - Adds about 10px on each side */}
        <div className="relative w-[395px] h-[832px] bg-[#1a1a1a] rounded-[60px] p-[12px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)_inset] border border-neutral-10/20 ring-1 ring-white/10">
          
          {/* Shine effect on frame */}
          <div className="absolute inset-0 rounded-[60px] bg-gradient-to-tr from-white/5 to-white/20 pointer-events-none" />
          
          {/* Power Button */}
          <div className="absolute right-[-2.5px] top-[180px] w-[3.5px] h-[80px] bg-neutral-11 rounded-l-md border-y border-white/10" />
          {/* Volume Buttons */}
          <div className="absolute left-[-2.5px] top-[140px] w-[3.5px] h-[50px] bg-neutral-11 rounded-r-md border-y border-white/10" />
          <div className="absolute left-[-2.5px] top-[200px] w-[3.5px] h-[50px] bg-neutral-11 rounded-r-md border-y border-white/10" />

          {/* Screen Area - Exactly 375x812 */}
          <div className="w-[371px] h-[808px] bg-neutral-1 rounded-[48px] overflow-hidden relative flex flex-col shadow-inner ring-1 ring-black/5">
            
            {/* Notch / Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-neutral-12 rounded-full z-30 flex items-center justify-center">
                <div className="w-10 h-1 bg-neutral-9/30 rounded-full" />
            </div>

            {/* Status Bar */}
            <div className="h-12 px-8 pt-2 flex items-center justify-between text-[13px] font-bold text-neutral-11 bg-neutral-1/80 backdrop-blur-md z-20">
              <span>9:41</span>
              <div className="flex gap-1.5 items-center">
                <div className="flex gap-0.5">
                    {[1,2,3,4].map(i => <div key={i} className={`w-[2.5px] rounded-full bg-neutral-12 ${i > 2 ? 'h-[8px]' : 'h-[5px] opacity-30'}`} />)}
                </div>
                <span className="text-[10px]">5G</span>
                <div className="w-6 h-3 border border-neutral-11/30 rounded-[3px] relative flex items-center px-[1px]">
                  <div className="w-[18px] h-[8px] bg-neutral-12 rounded-[1.5px]" />
                  <div className="absolute right-[-3px] w-[2px] h-[4px] bg-neutral-11/30 rounded-r-sm" />
                </div>
              </div>
            </div>

            {/* App Header (Mock) */}
            {title && !hideHeader && (
              <div className="h-12 px-4 border-b border-neutral-3 flex items-center justify-between bg-neutral-1 relative z-10">
                 <ChevronLeft size={20} className="text-neutral-11" />
                 <span className="font-bold text-sm absolute left-1/2 -translate-x-1/2 truncate max-w-[200px]">{title}</span>
                 <Menu size={20} className="text-neutral-11" />
              </div>
            )}
            
            {/* Scrollable App Content */}
            <div className={`flex-1 overflow-y-auto scrollbar-hide ${fullBleed ? 'p-0 bg-neutral-1' : 'pt-2 pb-12 bg-neutral-2'}`}>
              <div className={fullBleed ? 'h-full relative flex flex-col' : 'px-5'}>
                {children}
              </div>
            </div>
            
            {/* Home Indicator */}
            <div className="absolute bottom-1 w-1/3 h-[5px] bg-neutral-12/10 left-1/2 -translate-x-1/2 rounded-full z-20" />
          </div>
        </div>
        
        {/* Page Indicators below phone */}
        <div className="mt-8 flex justify-center gap-3">
          {[1,2,3].map(i => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === 1 ? 'w-8 bg-brand' : 'w-1.5 bg-neutral-4'}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ComponentsSection = ({ radius, setRadius }: { radius: number, setRadius: (v: number) => void }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('basic');
  const [selectedComp, setSelectedComp] = useState('Button');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: '全部分类', icon: LayoutPanelLeft },
    { id: 'basic', name: '基础组件', icon: Box },
    { id: 'input', name: '数据输入', icon: Edit },
    { id: 'display', name: '内容展示', icon: PanelsTopBottom },
    { id: 'feedback', name: '通用反馈', icon: Zap },
  ];
  
  const componentData: Record<string, any> = {
    Button: {
      category: 'basic',
      name: 'Button 按钮',
      desc: '用于开启一个闭环的操作任务，如“删除”对象、“购买”商品等。',
      usage: {
        scenarios: '当用户需要通过点击来触发某个明确的操作或通过表单提交信息时使用。',
        prohibitions: '避免在同一个页面中使用过多的主按钮，主按钮应具有唯一性或引导性。',
        common: '常用于底部操作栏、表单提交处、确认弹窗等场景。',
        similar: 'Link 文字链接：用于非强调性的跳转；ActionSheet 动作面板：用于一组相关联的操作。'
      },
      preview: (
        <div className="space-y-8">
           <div className="space-y-3">
              <h4 className="text-[14px] font-bold text-neutral-12 mb-4">01 基础按钮</h4>
              <button className="w-full py-3 bg-brand text-white g-radius font-medium text-sm active:scale-[0.98] transition-transform shadow-md shadow-brand/20">填充按钮</button>
              <button className="w-full py-3 bg-brand-light text-brand g-radius font-medium text-sm active:bg-brand/10 transition-colors">轻量按钮</button>
              <button className="w-full py-3 border border-neutral-4 text-neutral-10 g-radius font-medium text-sm active:bg-neutral-2">描边按钮</button>
              <button className="w-full py-3 text-brand font-medium text-sm active:opacity-60">文字按钮</button>
           </div>
           <div className="space-y-3">
              <h4 className="text-[14px] font-bold text-neutral-12 mb-4">02 禁用状态</h4>
              <button className="w-full py-3 bg-neutral-3 text-neutral-7 g-radius font-medium text-sm cursor-not-allowed">禁用按钮</button>
           </div>
           <div className="space-y-3">
              <h4 className="text-[14px] font-bold text-neutral-12 mb-4">03 图标按钮</h4>
              <button className="w-full py-3 bg-brand text-white g-radius font-medium text-sm flex items-center justify-center gap-2 active:scale-[0.98]">
                <Zap size={16} className="fill-white" />
                填充按钮
              </button>
           </div>
        </div>
      )
    },
    Slider: {
      category: 'basic',
      name: 'Slider 滑块选择器',
      desc: '用于选择横轴上的数值、区间、档位。',
      usage: {
        scenarios: '当用户需要在一个设定的范围之间进行连续或跳跃性的值选择时使用，比如音量、亮度调节，或者价格区间选择。',
        prohibitions: '选项较少或非连续的离散值选择不适合用滑块，应使用 Radio 或 Picker。',
        common: '用于音量、亮度、进度控制及数值筛选。',
        similar: 'Radio 单选框：用于离散状态选择；Rate 评分：用于对单一事物进行等级评价。'
      },
      preview: <SliderPreview />
    },
    ProgressBar: {
      category: 'basic',
      name: 'ProgressBar 进度条',
      desc: '用于展示操作的当前进度。',
      usage: {
        scenarios: '在资源下载、上传、任务提交等耗时操作中给用户明确的心理预期。',
        prohibitions: '如果进度不透明，应使用 Loading 状态，而不是虚假的进度条。',
        common: '线性进度条、环形进度条。',
        similar: 'Slider 滑块：用户可主动调节进度。'
      },
      preview: <ProgressBarPreview />
    },
    IndexBar: {
      category: 'basic',
      name: 'IndexBar 索引栏',
      desc: '用于快速滚动到列表的特定章节。',
      fullBleed: true,
      usage: {
        scenarios: '通过右侧字母索引快速定位城市、联系人或长篇文档目录。',
        prohibitions: '条目较少（少于 30 条）的长列表不建议使用。',
        common: '带字母提示浮层的右侧索引。',
        similar: 'SideBar 侧边导航。'
      },
      preview: <IndexBarPreview />
    },
    Rate: {
      category: 'basic',
      name: 'Rate 评分',
      desc: '用于对某行为/事物进行打分。允许用户通过点击或滑动在一组星星图标上进行评分。',
      usage: {
        scenarios: '常用于对商品、服务、应用等给出评价星级的场景。',
        prohibitions: '不可用于大量维度或过于细致客观的考核，评价应侧重于主观感受。',
        common: '星级打分、半星评价等。',
        similar: 'Slider 选择器：当选项不是评价性质且可选范围很大时。'
      },
      preview: <RatePreview />
    },
    Indexes: {
      category: 'basic',
      name: 'Indexes 索引',
      desc: '用于页面中信息快速检索，可以根据目录中的页码快速找到所需的内容。',
      fullBleed: true,
      usage: {
        scenarios: '常用于国家选择、城市选择、通讯录等包含大量按字母排序数据的列表页面。',
        prohibitions: '列表项较少的时候不需要使用索引。',
        common: '城市列表、通讯录列表等。',
        similar: 'SideBar 侧边导航：用于模块和类别之间的跳转。'
      },
      preview: <IndexesPreview />
    },
    BackTop: {
      category: 'basic',
      name: 'BackTop 返回顶部',
      desc: '当页面过长往下滑动时，帮助用户快速回到页面顶部。',
      fullBleed: true,
      usage: {
        scenarios: '在浏览长列表、长文章或无限滚动的信息流时方便迅速回顶。',
        prohibitions: '短页面或内容一屏可展示完时无需使用。',
        common: '位于屏幕右下方的悬浮按钮。',
        similar: 'Fab 悬浮按钮：提供页面主要操作。'
      },
      preview: <BackTopPreview />
    },
    Image: {
      category: 'basic',
      name: 'Image 图片',
      desc: '用于展示效果，主要为上下左右居中裁切、拉伸、平铺等方式。',
      usage: {
        scenarios: '用于文章插图、商品图片、头像展示等。',
        prohibitions: '需避免在没有加载、错误状态处理下直接铺设大量图片。',
        common: '商品详情主图、列表缩略图、头像等。',
        similar: 'Icon 图标：表示某种特定含义的小图形。'
      },
      preview: <ImagePreview />
    },
    PullDownRefresh: {
      category: 'basic',
      name: 'PullDownRefresh 下拉刷新',
      desc: '用于快速刷新页面信息，刷新可以是整页刷新也可以是页面的局部刷新。',
      usage: {
        scenarios: '在列表页、首页等具有动态增量数据的页面更新最新内容。',
        prohibitions: '静态展示页不需要下拉刷新；局部卡片不建议嵌下拉刷新。',
        common: '新闻列表、动态消息流的顶部刷新。',
        similar: 'Loading 加载：表示正在加载数据的普通状态。'
      },
      preview: <PullDownRefreshPreview />
    },
    Input: {
      category: 'input',
      name: 'Input 输入框',
      desc: '用于接收用户输入的文字内容，常配合表单使用。',
      usage: {
        scenarios: '在登录、注册、搜索、评价等需要获取用户文本信息的场景。',
        prohibitions: '单个页面输入框不宜过多，若内容繁杂应考虑分步骤展示。',
        common: '单行文本输入、密码输入、带清空功能的输入框等。',
        similar: 'Textarea 文本域：用于多行长文本输入；Search 搜索框：专用于搜索功能。'
      },
      preview: <InputPreview />
    },
    Cell: {
      category: 'display',
      name: 'Cell 单元格',
      desc: '用于展现列表信息、功能入口或选项列表。',
      usage: {
        scenarios: '在个人中心设置项、属性列表展示、消息列表导航等。',
        prohibitions: '单元格高度应保持一致，标题过长时应考虑简化。',
        common: '带跳转箭头的入口、带图标的菜单项、纯展示的属性对等。',
        similar: 'List 列表：多个单元格的集合；Collapse 折叠面板：内容较多时可收起的单元格。'
      },
      preview: <CellPreview />
    },
    Badge: {
      category: 'display',
      name: 'Badge 徽标',
      desc: '位于主体对象右上角的提示元素，表示主体的数量变化。',
      usage: {
        scenarios: '新消息提醒、购物车商品数量、版本更新提示。',
        prohibitions: '避免在页面中滥用红点，会导致用户由于视觉噪音产生焦虑感。',
        common: '红点提示、数字提示、自定义文字提示。',
        similar: 'Tab 选项卡上的徽标；Button 上的状态点。'
      },
      preview: <BadgePreview />
    },
    Checkbox: {
      category: 'input',
      name: 'Checkbox 多选',
      desc: '用于从一个或多个可用选项中选择一个或一个以上的选项。',
      usage: {
        scenarios: '多项设置切换、列表多选操作、勾选同意协议（单选框形态）。',
        prohibitions: '若选项超过 5 个且只能单选，请考虑使用 Radio 或 Picker。',
        common: '纵向列表选择、横向平铺选择。',
        similar: 'Switch：即时生效的开关；Radio：互斥的单选。'
      },
      preview: <CheckboxPreview />
    },
    ButtonGroup: {
      category: 'basic',
      name: 'ButtonGroup 按钮组',
      desc: '将一组功能相关的按钮聚合在一起。',
      usage: {
        scenarios: '表单底部的保存/取消、对话框的确认/关闭、Tab样式的切换。',
        prohibitions: '按钮组内的按钮样式不应完全一致，需体现主次关系。',
        common: '等宽排列、主次组合排列。',
        similar: 'TabBar 底部标签栏；Tabs 选项卡。'
      },
      preview: <ButtonGroupPreview />
    },
    Fab: {
      category: 'basic',
      name: 'Fab 悬浮按钮',
      desc: '悬浮在页面之上的按钮，用于承载页面最核心的操作。',
      usage: {
        scenarios: '在需要强调某个核心交互（如发布、搜索、回到顶部）且不占位固定宽度的场景。',
        prohibitions: '避免在页面上放置过多的悬浮按钮，通常全局仅建议 1 个常驻。',
        common: '单按钮固定、多按钮扇形/垂直展开。',
        similar: 'Button：固定流式布局按钮；NavBar：底部固定操作栏。'
      },
      preview: <FabPreview />
    },
    Tag: {
      category: 'display',
      name: 'Tag 标签',
      desc: '常用于标记对象属性、分类，通常为圆角矩形。',
      usage: {
        scenarios: '商品属性标注、任务进度状态、用户偏好分类。',
        prohibitions: '标签文字应尽可能简短，建议不超过 4 个字。',
        common: '圆角标签、描边标签、带关闭图标标签。',
        similar: 'Badge 徽标：表示数量；Button 按钮：触发行为。'
      },
      preview: <TagPreview />
    },
    Switch: {
      category: 'input',
      name: 'Switch 开关',
      desc: '用于在两个选项之间反复切换。',
      usage: {
        scenarios: '系统设置（如Wi-Fi、暗色模式）、功能模块开启、表单即时生效选项。',
        prohibitions: '若切换后需要用户点击“提交”才能生效，请改用 Checkbox。',
        common: '默认开关、带文字描述的开关。',
        similar: 'Checkbox 多选框；Radio 单选框。'
      },
      preview: <SwitchPreview />
    },
    Calendar: {
      category: 'input',
      name: 'Calendar 日历',
      desc: '按照日历形式展示数据或日期的容器。',
      usage: {
        scenarios: '用于选择日期或查看按天呈现的数据信息。',
        prohibitions: '尽量采用日历直观选择，避免让用户手动输入复杂格式。',
        common: '单日选择、日期区间选择。',
        similar: 'DateTimePicker 时间选择器'
      },
      preview: <CalendarPreview />
    },
    Cascader: {
      category: 'input',
      name: 'Cascader 级联选择器',
      desc: '级联选择器适用于有清晰层级结构的数据集合，用户可以通过逐级查看并选择。',
      usage: {
        scenarios: '省市区选择、多级分类选择、组织架构选择等。',
        prohibitions: '不要用于超过 4 级的层级，层级过深建议在页面内实现导航。',
        common: '省市区三级联动。',
        similar: 'Picker 选择器'
      },
      preview: <CascaderPreview />
    },
    DateTimePicker: {
      category: 'input',
      name: 'DateTimePicker 时间选择器',
      desc: '用于选择一个时间点或者一个时间段。',
      usage: {
        scenarios: '预约时间、设置提醒时间。',
        prohibitions: '如需查看全月分布，请使用 Calendar 日历组件。',
        common: '滚轮选择时分秒。',
        similar: 'Calendar 日历'
      },
      preview: <DateTimePickerPreview />
    },
    Form: {
      category: 'input',
      name: 'Form 表单',
      desc: '用以收集、校验和提交数据，一般由输入框、选择器等控件组成。',
      usage: {
        scenarios: '登录注册、发布信息、配置系统参数。',
        prohibitions: '表单项过多时请拆分步骤以减轻用户负担。',
        common: '顶对齐表单、左对齐表单。',
        similar: '基础容器。'
      },
      preview: <FormPreview />
    },
    Picker: {
      category: 'input',
      name: 'Picker 选择器',
      desc: '用于一组预设数据中的选择。',
      usage: {
        scenarios: '下拉选单平替、平铺选单过多时。',
        prohibitions: '不要用于选项过少（少于3项）的场景，少于3项请使用 Radio。',
        common: '底部弹出的滚轮选择器。',
        similar: 'Cascader 级联选择器'
      },
      preview: <PickerPreview />
    },
    Search: {
      category: 'input',
      name: 'Search 搜索框',
      desc: '用于用户输入搜索信息，并进行页面内容搜索。',
      usage: {
        scenarios: '需要快速定位信息的长列表或主页。',
        prohibitions: '输入框应有清晰的“取消”或清空交互。',
        common: '带背景的圆角矩形框，左侧常驻放大镜图标。',
        similar: 'Input 输入框'
      },
      preview: <SearchPreview />
    },
    Stepper: {
      category: 'input',
      name: 'Stepper 步进器',
      desc: '用于数量的增减。',
      usage: {
        scenarios: '购物车调整商品数量、购买票数或预订天数等。',
        prohibitions: '增减幅度不宜过大，如果是大幅数字变化请使用普通 Input。',
        common: '加减号按钮与中间展示数字组成的结构。',
        similar: 'Input 输入框'
      },
      preview: <StepperPreview />
    },
    Textarea: {
      category: 'input',
      name: 'Textarea 多行文本框',
      desc: '用于多行文本的输入。',
      usage: {
        scenarios: '意见反馈、个性签名、详细地址填写。',
        prohibitions: '应当显示字数限制提示，告知用户输入极限。',
        common: '高度随内容自适应或固定高度的文本域。',
        similar: 'Input 输入框'
      },
      preview: <TextareaPreview />
    },
    Upload: {
      category: 'input',
      name: 'Upload 上传',
      desc: '用于相册读取或拉起拍照的图片/文件上传功能。',
      usage: {
        scenarios: '上传头像、提交身份证照片、上传附件。',
        prohibitions: '长宽比应预先设定，且明确支持的格式限制。',
        common: '带加号的虚线框或正方形区域。',
        similar: '无。'
      },
      preview: <UploadPreview />
    },
    Divider: {
      category: 'display',
      name: 'Divider 分割线',
      desc: '用于分割、组织、细化有一定逻辑的组织元素内容和页面结构。',
      usage: {
        scenarios: '列表项之间的分隔、段落之间的间隔、带有引导性的文字分隔。',
        prohibitions: '分割线的颜色不宜过深，应作为视觉背景，避免干扰主要信息。',
        common: '普通线、带文字线、纵向分割线。',
        similar: 'Margin/Padding：通过间距实现逻辑分隔。'
      },
      preview: (
        <div className="space-y-10 pt-6">
           <div className="space-y-4">
              <p className="text-xs text-neutral-8 text-center uppercase tracking-widest font-bold">基础分割线</p>
              <div className="h-px bg-neutral-3 w-full" />
           </div>

           <div className="space-y-4">
              <div className="flex items-center gap-4">
                 <div className="h-px bg-neutral-3 flex-1" />
                 <span className="text-[11px] text-neutral-6 font-bold uppercase tracking-wider">我是有底线的</span>
                 <div className="h-px bg-neutral-3 flex-1" />
              </div>
           </div>

           <div className="flex justify-center items-center h-12 gap-8">
              <span className="text-sm text-neutral-9">菜单一</span>
              <div className="w-px h-4 bg-neutral-3" />
              <span className="text-sm text-neutral-9">菜单二</span>
              <div className="w-px h-4 bg-neutral-3" />
              <span className="text-sm text-neutral-9">菜单三</span>
           </div>
        </div>
      )
    },
    Avatar: {
      category: 'display',
      name: 'Avatar 头像',
      desc: '用于展示用户头像信息，除了纯展示也可点击进入个人详情等操作。',
      usage: {
        scenarios: '个人中心、用户列表、评论列表、消息界面中用来代表对象实体。',
        prohibitions: '头像不要使用过低分辨率的图片，加载失败时必须要有兜底的默认图形。',
        common: '圆形头像、圆角矩形头像、文字头像、图标头像等。',
        similar: 'Image 图片：用于更通用、复杂的图片展示。'
      },
      preview: <AvatarPreview />
    },
    Collapse: {
      category: 'display',
      name: 'Collapse 折叠面板',
      desc: '用于对复杂区域进行分组和隐藏，常用于订单信息展示等。',
      usage: {
        scenarios: '页面内容较多，需要分组聚合展示时，如详细说明、帮助中心、订单详情列表等。',
        prohibitions: '不要用于重要信息的隐藏；若只有一项内容，通常无需折叠。',
        common: '单项折叠、手风琴折叠（互斥展开）。',
        similar: 'Cell 单元格：无折叠能力的列表展示。'
      },
      preview: <CollapsePreview />
    },
    CountDown: {
      category: 'display',
      name: 'CountDown 倒计时',
      desc: '用于实时展示倒计时数值。',
      usage: {
        scenarios: '限时活动抢购、验证码倒数、订单支付超时提醒。',
        prohibitions: '时间到了需要提供明确的完成回调或状态变更，避免时间停留在 0 后无反馈。',
        common: '纯文本倒计时、包含背景块的倒数、获取验证码按钮自带的倒数等。',
        similar: 'Badge：展示数量，但不具有动态时间特性。'
      },
      preview: <CountDownPreview />
    },
    Empty: {
      category: 'display',
      name: 'Empty 空状态',
      desc: '用于空状态时的占位提示。',
      usage: {
        scenarios: '列表无数据、网络异常断开、搜索无结果、功能尚未开放。',
        prohibitions: '空状态除了描述现在的情况，还应尽可能提供返回、刷新或尝试去操作的引导按钮。',
        common: '带有插画背景的空区域、纯文字为空提示。',
        similar: 'Error 错误回退页面：针对崩溃等严重问题。'
      },
      preview: <EmptyPreview />
    },
    Grid: {
      category: 'display',
      name: 'Grid 宫格',
      desc: '用于功能入口布局，将页面或特定区域切分成若干等大的区块，形成若干功能入口。',
      usage: {
        scenarios: 'App 首页的主要功能导航、金刚区操作面板。',
        prohibitions: '功能入口数量过多时，可考虑滑动支持，避免占用过高屏幕空间。',
        common: '3列宫格、4列宫格、5列宫格等。',
        similar: 'List 列表：以行结构展示的排列方式。'
      },
      preview: <GridPreview />
    },
    Swiper: {
      category: 'display',
      name: 'Swiper 轮播图',
      desc: '用于循环轮播一组图片或内容，也可以滑动进行切换，轮播动效时间可以设置。',
      usage: {
        scenarios: '首页主要 Banner 推送、商品多图详情查看、活动引导页。',
        prohibitions: '轮播图数量不宜过多，图片过重会导致性能瓶颈；底部需附带指示器。',
        common: '顶栏通栏 Banner、卡片式轮播。',
        similar: 'Grid 宫格图片：平铺展示多个图片。'
      },
      preview: <SwiperPreview />
    },
    Drawer: {
      category: 'nav',
      name: 'Drawer 抽屉',
      desc: '用作一组平行关系页面/内容的切换器，同屏可展示更多的选项数量。',
      fullBleed: true,
      hideHeader: true,
      usage: {
        scenarios: '功能菜单导航、筛选条件选择、详情内容的快速查阅。',
        prohibitions: '抽屉层级不宜过深，一般不超过两层嵌套。',
        common: '左侧导航抽屉、底部筛选抽屉。',
        similar: 'ActionSheet 动作面板；SideBar 侧边栏。'
      },
      preview: <DrawerPreview />
    },
    Navbar: {
      category: 'nav',
      name: 'Navbar 导航栏',
      desc: '用于不同页面之间切换或者跳转。',
      usage: {
        scenarios: '所有二级页、功能页的顶部常驻入口。',
        prohibitions: '标题字数过多时，应采用截断处理并支持长按查看。',
        common: '标准导航栏、带操作按钮导航栏、深色背景导航栏。',
        similar: 'TabBar 底部标签栏。'
      },
      preview: (
        <div className="space-y-12 bg-neutral-2 -mx-5 px-5 py-10 h-full">
           <div className="bg-neutral-1 shadow-sm ring-1 ring-neutral-3 g-radius-card overflow-hidden">
              <div className="h-11 px-4 flex items-center justify-between">
                 <ChevronLeft size={20} className="text-neutral-11" />
                 <span className="text-[15px] font-bold">页面标题</span>
                 <X size={20} className="text-neutral-11" />
              </div>
           </div>
           
           <div className="bg-brand text-white shadow-lg g-radius-card overflow-hidden">
              <div className="h-11 px-4 flex items-center justify-between">
                 <ChevronLeft size={20} />
                 <span className="text-[15px] font-bold">项目详情</span>
                 <div className="flex gap-4">
                    <Search size={18} />
                    <MoreHorizontal size={18} />
                 </div>
              </div>
           </div>

           <div className="bg-neutral-0 dark:bg-neutral-2 ring-1 ring-neutral-3 g-radius-card overflow-hidden">
              <div className="h-14 px-4 flex flex-col justify-center gap-1 border-b border-neutral-3">
                 <div className="flex items-center gap-2">
                    <ChevronLeft size={18} className="text-neutral-11" />
                    <span className="text-[16px] font-extrabold">广联工作台</span>
                    <ChevronRight size={14} className="text-neutral-6 rotate-90" />
                 </div>
                 <span className="text-[10px] text-brand font-bold uppercase tracking-widest pl-6">Cloud Industrial Platform</span>
              </div>
           </div>
        </div>
      )
    },
    TabBar: {
      category: 'nav',
      name: 'TabBar 底部标签栏',
      desc: '用于在不同功能模块之间进行快速切换。',
      usage: {
        scenarios: 'APP 首页的一级导航切换。',
        prohibitions: '标签栏通常不少于 3 个且不多于 5 个功能模块。',
        common: '图标+文字、纯图标、中心突出按钮。',
        similar: 'Navbar 顶部导航；SideBar 侧边栏。'
      },
      preview: <TabBarPreview />
    },
    Tabs: {
      category: 'nav',
      name: 'Tabs 选项卡',
      desc: '用于内容分类后的展示切换。',
      usage: {
        scenarios: '新闻列表分类、筛选面板、详情页信息板块切换。',
        prohibitions: 'Tab 的选项卡不宜过多，超过 5 个请支持横向平滑滚动。',
        common: '下划线型、卡片型、圆角容器型。',
        similar: 'SideBar 侧边栏；TabBar 底部标签栏。'
      },
      preview: <TabsPreview />
    },
    Radio: {
      category: 'input',
      name: 'Radio 单选',
      desc: '用于从多个可用选项中选择一个选项。',
      usage: {
        scenarios: '在互斥的选项中进行选择，如性别选择、支付方式选择等。',
        prohibitions: '选项建议不少于 2 个且不多于 5 个，过多建议使用 Picker。',
        common: '标准圆形选择器、卡片式单选。',
        similar: 'Checkbox 多选框：支持多选；Switch：开关切换。'
      },
      preview: <RadioPreview />
    },
    SideBar: {
      category: 'nav',
      name: 'SideBar 侧边导航',
      desc: '垂直排列的导航项，常用于分类导航场景。',
      usage: {
        scenarios: '商城分类筛选、多业务线切换导航。',
        prohibitions: '侧边栏通常配合主内容区使用，不宜单独出现。',
        common: '标准侧边栏、带微标侧边栏。',
        similar: 'Tabs 选项卡；Tabs 纵向模式。'
      },
      preview: <SideBarPreview />
    },
    Loading: {
      category: 'feedback',
      name: 'Loading 加载',
      desc: '用于表示正在加载中或执行中的状态，包含全屏、PreLoad、DragLoad等形态。',
      usage: {
        scenarios: '数据异步加载、提交表单后的等待、长任务处理。',
        prohibitions: '避免全屏加载时间过长，若任务超过10秒应提供进度条。',
        common: '圆环加载、PreLoad色块、DragLoad上提下拉。',
        similar: 'Skeleton 骨架屏：结构占位加载。'
      },
      preview: <LoadingPreview />
    },
    Popup: {
      category: 'feedback',
      name: 'Popup 弹出层',
      desc: '由中心或边缘弹出的浮层，用于承载临时内容。',
      fullBleed: true,
      hideHeader: true,
      usage: {
        scenarios: '确认操作、信息输入、更多功能设置。',
        prohibitions: '内容不宜过多，若内容复杂应考虑详情页跳转。',
        common: '中间弹窗、底部向上弹出、顶部向下弹出。',
        similar: 'ActionSheet 动作面板；Dialog 对话框。'
      },
      preview: <PopupPreview />
    },
    Toast: {
      category: 'feedback',
      name: 'Toast 轻提示',
      desc: '用户操作后的即时反馈，停留时间短且不需要操作。',
      usage: {
        scenarios: '操作成功提醒、网络断开提示、短暂的警告信息。',
        prohibitions: '不要承载重要信息，因为它是自动消失的。',
        common: '成功提示、警告提示、加载提示。',
        similar: 'Notify 消息通知：顶部停留时间较长。'
      },
      preview: <ToastPreview />
    },
    Dialog: {
      category: 'feedback',
      name: 'Dialog 对话框',
      desc: '用于显示重要提示或请求用户进行重要操作，一种打断当前操作的模态视图。',
      usage: {
        scenarios: '删除确认、权限请求、重要协议签署。',
        prohibitions: '避免在对话框内嵌套复杂的滚动内容或另一个对话框。',
        common: '双按钮确认框、单按钮提示框。',
        similar: 'Popup 弹出层：更灵活的非重要打断；Toast：无需打断的轻提示。'
      },
      preview: <DialogPreview />
    },
    DropdownMenu: {
      category: 'feedback',
      name: 'DropdownMenu 下拉菜单',
      desc: '菜单呈现数个并列的选项类目，用于整个页面的内容筛选，由菜单面板和菜单选项组成。',
      usage: {
        scenarios: '商品列表排序筛选、地区选择切换、分类目录过滤。',
        prohibitions: '选项不宜过多，超过一屏建议使用动作面板或新页面展示。',
        common: '单选下拉、多级联动下拉。',
        similar: 'ActionSheet 面板：从底部弹出的选项集合。'
      },
      preview: <DropdownMenuPreview />
    },
    Message: {
      category: 'feedback',
      name: 'Message 消息通知',
      desc: '用于轻量级反馈或提示，不会打断用户操作。',
      usage: {
        scenarios: '系统主动推送的通知、长耗时任务完成的提醒、收到新邮件。',
        prohibitions: '非关键信息不应使用强提醒样式，避免过多消息堆叠。',
        common: '顶部滑出提示、可关闭的消息条。',
        similar: 'Toast 轻提示：一般是跟随用户操作后触发；Notify：更加引人注目的顶部固定通知。'
      },
      preview: <MessagePreview />
    },
    SwipeCell: {
      category: 'feedback',
      name: 'SwipeCell 滑动操作',
      desc: '用于承载列表中的更多操作，通过左右滑动来展示，按钮的宽度固定高度根据列表高度而变化。',
      usage: {
        scenarios: '消息列表左滑删除、邮件列表标记已读、购物车收藏单品。',
        prohibitions: '必须有明确且一致的交互提示，否则用户可能无法发现此隐藏功能。',
        common: '单侧滑出按钮、双侧滑出对应不同操作。',
        similar: 'Cell 单元格：滑动操作的承载基础。'
      },
      preview: <SwipeCellPreview />
    }
  };

  const filteredKeys = Object.keys(componentData).filter(key => {
    const matchesSearch = key.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          componentData[key].name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || componentData[key].category === selectedCategory;
    
    if (searchTerm) return matchesSearch;
    return matchesCategory;
  });

  const currentKey = filteredKeys.includes(selectedComp) ? selectedComp : filteredKeys[0];
  const current = currentKey ? componentData[currentKey] : null;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-12 xl:gap-24 items-start relative min-h-[1200px]">
      <style>{`
        .g-radius { border-radius: ${radius}px !important; }
        .g-radius-card { border-radius: ${radius * 1.5}px !important; }
        .g-radius-inner { border-radius: ${Math.max(0, radius - 4)}px !important; }
      `}</style>
      
      {/* Left Column: Navigator & Info */}
      <div className="space-y-16 w-full max-w-4xl">
        <div className="space-y-8">
           <div className="flex flex-col md:flex-row gap-5">
              {/* Category Filter */}
              <div className="flex gap-1 p-1 bg-neutral-3 rounded-xl">
                 {categories.map(cat => (
                   <button
                     key={cat.id}
                     onClick={() => {
                       setSelectedCategory(cat.id);
                       setSearchTerm('');
                     }}
                     className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap
                       ${selectedCategory === cat.id && !searchTerm
                         ? 'bg-neutral-11 dark:bg-brand text-neutral-0 dark:text-white shadow-lg' 
                         : 'text-neutral-7 hover:text-neutral-10'}`}
                   >
                     <cat.icon size={14} />
                     {cat.name}
                   </button>
                 ))}
              </div>

              {/* Search */}
              <div className="relative flex-1">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-6" size={14} />
                 <input 
                   type="text" 
                   placeholder="快速查找组件..." 
                   className="w-full h-9 pl-10 pr-4 bg-neutral-3 border-transparent border rounded-xl text-xs transition-all focus:bg-neutral-0 dark:focus:bg-neutral-2 focus:border-brand/30 outline-none placeholder:text-neutral-6"
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                 />
              </div>
           </div>

           {/* Global Config: Border Radius */}
           <div className="p-4 bg-neutral-1 border border-neutral-3 rounded-2xl flex flex-col sm:flex-row items-center gap-6 shadow-sm">
              <div className="flex items-center gap-3 shrink-0">
                 <div className="w-8 h-8 bg-brand-light text-brand rounded-lg flex items-center justify-center">
                    <Maximize size={16} />
                 </div>
                 <div>
                    <div className="text-[12px] font-bold text-neutral-11">全局圆角控制</div>
                    <div className="text-[10px] text-neutral-6 uppercase font-medium">Border Radius Control</div>
                 </div>
              </div>
              <div className="flex-1 w-full flex items-center gap-4">
                 <input 
                   type="range" min="0" max="32" step="1" 
                   value={radius}
                   onChange={(e) => setRadius(Number(e.target.value))}
                   className="flex-1 accent-brand h-1.5 bg-neutral-2 rounded-lg appearance-none cursor-pointer"
                 />
                 <div className="w-12 text-center py-1 bg-neutral-2 border border-neutral-3 rounded-lg text-[11px] font-mono font-bold text-brand">
                   {radius}px
                 </div>
              </div>
              <div className="hidden sm:flex gap-1">
                 {[0, 8, 12, 16, 24].map(v => (
                   <button 
                     key={v}
                     onClick={() => setRadius(v)}
                     className={`px-2 py-1 text-[10px] font-bold rounded-md transition-all ${radius === v ? 'bg-neutral-11 dark:bg-brand text-neutral-0 dark:text-white shadow-md' : 'bg-neutral-2 text-neutral-7 hover:bg-neutral-3'}`}
                   >
                     {v === 0 ? '直角' : (v === 8 ? '小' : (v === 12 ? '中' : (v === 16 ? '大' : '极大')))}
                   </button>
                 ))}
              </div>
           </div>

           {/* Component Grid Selector */}
           <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {filteredKeys.map(key => (
                <button
                  key={key}
                  onClick={() => setSelectedComp(key)}
                  className={`
                    p-4 rounded-xl border text-left transition-all relative overflow-hidden group
                    ${selectedComp === key 
                      ? 'bg-neutral-11 dark:bg-brand border-neutral-11 dark:border-brand shadow-xl translate-y-[-2px]' 
                      : 'bg-neutral-0 dark:bg-neutral-1/40 border-neutral-3 dark:border-neutral-3/20 text-neutral-9 hover:border-brand/40 hover:shadow-md'}
                  `}
                >
                  <div className={`text-[10px] font-bold mb-1 opacity-60 uppercase tracking-tighter ${selectedComp === key ? 'text-neutral-0 dark:text-white/80' : 'text-neutral-6'}`}>
                     {componentData[key].category}
                  </div>
                  <div className={`text-[13px] font-extrabold truncate tracking-tight ${selectedComp === key ? 'text-neutral-0 dark:text-white' : 'text-neutral-11'}`}>
                     {componentData[key].name}
                  </div>
                  {selectedComp === key && (
                    <motion.div 
                      layoutId="active-bg"
                      className="absolute bottom-0 right-0 p-1 opacity-20"
                    >
                      <Check size={32} />
                    </motion.div>
                  )}
                </button>
              ))}
           </div>
        </div>

        {current ? (
          <div className="space-y-20 animate-fade-in py-4">
            {/* Header Info */}
            <div className="space-y-4">
               <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-4xl lg:text-5xl font-extrabold text-neutral-11 tracking-tighter">{current.name}</h2>
                  <div className="flex gap-2">
                     <span className="px-2.5 py-0.5 bg-success/10 text-success text-[10px] font-bold rounded-lg uppercase tracking-widest border border-success/20">Standard</span>
                     <span className="px-2.5 py-0.5 bg-brand-light text-brand text-[10px] font-bold rounded-lg uppercase tracking-widest border border-brand/20">V1.0.4</span>
                  </div>
               </div>
               <p className="text-lg text-neutral-7 leading-relaxed max-w-3xl font-medium">{current.desc}</p>
            </div>

            {/* Practical Modules */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* DO's */}
                <div className="p-8 bg-neutral-3 rounded-2xl border border-neutral-4 space-y-6 relative overflow-hidden">
                   <div className="flex items-center gap-3 text-[13px] font-bold text-neutral-11 uppercase tracking-widest">
                      <div className="w-8 h-8 bg-brand rounded-xl flex items-center justify-center text-white shadow-brand">
                         <ThumbsUp size={16} />
                      </div>
                      用法建议 Recommendations
                   </div>
                   <div className="text-[14px] text-neutral-8 leading-loose font-medium">
                      {current.usage.scenarios}
                   </div>
                   <div className="absolute top-2 right-2 opacity-[0.03] rotate-12">
                      <ThumbsUp size={120} />
                   </div>
                </div>

                {/* DONT's */}
                <div className="p-8 bg-neutral-1 border border-neutral-3 rounded-2xl shadow-sm space-y-6 relative overflow-hidden">
                   <div className="flex items-center gap-3 text-[13px] font-bold text-neutral-11 uppercase tracking-widest">
                      <div className="w-8 h-8 bg-error rounded-xl flex items-center justify-center text-white">
                         <CircleAlert size={16} />
                      </div>
                      禁用场景 Prohibitions
                   </div>
                   <div className="text-[14px] text-neutral-8 leading-loose font-medium">
                      {current.usage.prohibitions}
                   </div>
                   <div className="absolute top-2 right-2 opacity-[0.03] rotate-12">
                      <CircleAlert size={120} />
                   </div>
                </div>
            </div>

            {/* Implementation Details */}
            <div className="grid grid-cols-1 gap-8">
               <div className="space-y-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <AlignJustify className="text-brand" size={20} />
                    常见形态 Common Usage
                  </h3>
                  <div className="p-8 bg-neutral-2 border border-neutral-3 rounded-2xl text-[14px] text-neutral-8 leading-loose font-medium shadow-inner">
                     {current.usage.common}
                  </div>
               </div>

               <div className="space-y-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <RefreshCw className="text-brand" size={20} />
                    对比建议 Comparison
                  </h3>
                  <div className="p-8 bg-brand-light/50 border border-brand/10 rounded-2xl text-[14px] text-neutral-8 leading-loose font-medium">
                     {current.usage.similar}
                  </div>
               </div>
            </div>

            {/* Technical Snippet */}
            <div className="space-y-6">
               <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <FileText className="text-neutral-6" size={20} />
                    调用代码参考 Implementation
                  </h3>
                  <button className="flex items-center gap-2 text-xs font-bold text-brand hover:underline px-4 py-2 rounded-lg hover:bg-brand-light transition-all border border-brand/10">
                     <Copy size={14} />
                     复制代码
                  </button>
               </div>
               <div className="bg-neutral-11 rounded-3xl p-8 font-mono text-[13px] overflow-x-auto shadow-2xl relative overflow-hidden group">
                  <div className="flex gap-2 mb-8 opacity-40">
                     <div className="w-3 h-3 rounded-full bg-error" />
                     <div className="w-3 h-3 rounded-full bg-warning" />
                     <div className="w-3 h-3 rounded-full bg-success" />
                  </div>
                  <pre className="text-neutral-6 leading-relaxed">
                    <code>
{`// 广联移动端规范示例代码
import { ${currentKey} } from '@gl-spec/mobile-ui';

const App = () => (
    <${currentKey} 
      title="${current.name.split(' ')[0]}" 
      type="primary"
      onClick={() => console.log('Action triggered')}
    />
);`}
                    </code>
                  </pre>
               </div>
            </div>
          </div>
        ) : (
          <div className="py-40 flex flex-col items-center justify-center text-neutral-6 gap-6">
             <div className="w-20 h-20 bg-neutral-3 rounded-full flex items-center justify-center border border-neutral-4 animate-pulse">
                <Search size={32} className="opacity-30" />
             </div>
             <p className="font-bold text-neutral-7">根据搜索条件未匹配到相关组件</p>
          </div>
        )}
      </div>

      {/* Right Column: Persistent Mobile Showcase */}
      <div className="fixed top-[84px] right-[max(2rem,calc((100vw-1600px)/2+3rem))] hidden xl:flex items-start justify-center pointer-events-none z-50">
        <div className="pointer-events-auto bg-neutral-1/40 backdrop-blur-3xl rounded-[70px] p-6 border border-neutral-3 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.05)_inset] ring-1 ring-black/5">
          <ComponentPreview title={current?.name || selectedComp} fullBleed={current?.fullBleed} hideHeader={current?.hideHeader}>
            {current ? current.preview : (
              <div className="flex items-center justify-center h-full text-neutral-6 italic text-sm font-medium">预览载入中...</div>
            )}
          </ComponentPreview>
        </div>
      </div>

      {/* Support Mobile View (Absolute bottom float for small screens) */}
      <div className="xl:hidden fixed bottom-6 right-6 z-50">
         <button 
           className="w-14 h-14 bg-brand text-white rounded-full shadow-2xl flex items-center justify-center active:scale-95 transition-transform"
           onClick={() => {
              const el = document.getElementById('mobile-preview-target');
              el?.scrollIntoView({ behavior: 'smooth' });
           }}
         >
           <Smartphone size={24} />
         </button>
      </div>

      <div id="mobile-preview-target" className="lg:hidden w-full mt-10">
         <div className="bg-neutral-1 rounded-[48px] p-4 flex justify-center">
            <div className="scale-[0.85] origin-top">
              <ComponentPreview title={current?.name || selectedComp} fullBleed={current?.fullBleed} hideHeader={current?.hideHeader}>
                {current ? current.preview : <div>预览载入中...</div>}
              </ComponentPreview>
            </div>
         </div>
      </div>
    </div>
  );
};

const FeedbackSection = () => {
  const [selectedFeed, setSelectedFeed] = useState<string>('Toast');

  const feedbackItems = [
    { id: 'Toast', name: 'Toast 轻提示', icon: Zap, desc: '轻量级反馈，自动消失' },
    { id: 'Dialog', name: 'Dialog 对话框', icon: CreditCardIcon, desc: '强中断模态，需用户确认' },
    { id: 'Popup', name: 'Popup 弹出层', icon: LayoutPanelTop, desc: '基础容器，承载各类复杂内容' },
    { id: 'Message', name: 'Message 消息通知', icon: MessageSquare, desc: '顶层通知，非阻塞式提醒' },
    { id: 'Loading', name: 'Loading 加载', icon: Loader2, desc: '状态反馈，支持 PreLoad 与 DragLoad' },
    { id: 'DropdownMenu', name: 'Dropdown 下拉菜单', icon: ChevronDown, desc: '局部过滤，高效内容筛选' },
  ];
  
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-12 xl:gap-24 items-start relative animate-fade-in">
      <div className="space-y-16 w-full max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6">
          {feedbackItems.map(item => (
            <button 
              key={item.id}
              onClick={() => setSelectedFeed(item.id)}
              className={`
                p-6 rounded-2xl border text-left transition-all group relative overflow-hidden
                ${selectedFeed === item.id 
                  ? 'bg-brand dark:bg-brand border-brand text-white shadow-2xl translate-y-[-2px]' 
                  : 'bg-neutral-0 dark:bg-neutral-2 border-neutral-3 text-neutral-9 hover:border-brand/40 hover:shadow-lg'}
              `}
            >
              <div className="flex items-center gap-4 relative z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors shadow-sm
                  ${selectedFeed === item.id ? 'bg-white/20 text-white' : 'bg-brand-light text-brand group-hover:bg-brand group-hover:text-white'}`}>
                  <item.icon size={24} className={item.id === 'Loading' ? 'animate-spin' : ''} />
                </div>
                <div>
                   <div className="text-sm font-extrabold tracking-tight">{item.name}</div>
                   <div className={`text-[11px] mt-1 font-medium ${selectedFeed === item.id ? 'opacity-60' : 'text-neutral-6'}`}>{item.desc}</div>
                </div>
              </div>
              {selectedFeed === item.id && (
                 <div className="absolute top-0 right-0 p-2 text-white/10">
                    <Check size={48} />
                 </div>
              )}
            </button>
          ))}
        </div>

        <div className="p-10 bg-neutral-1/60 dark:bg-neutral-1/40 backdrop-blur-xl overflow-hidden border border-neutral-3 rounded-[40px] space-y-6 relative group shadow-lg">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand/10 transition-all duration-700" />
           <div className="absolute bottom-0 left-0 w-48 h-48 bg-success/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
           <h4 className="text-xs font-black text-neutral-6 uppercase tracking-[0.2em] flex items-center gap-2 relative z-10">
              <div className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
              Interaction Principle 交互原则
           </h4>
           <div className="space-y-4 relative z-10">
              <p className="text-[16px] text-neutral-8 leading-relaxed font-medium">
                反馈组件应遵循<span className="text-neutral-11 font-black px-1">「恰如其分」</span>的原则。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 rounded-2xl bg-neutral-2/50 border border-neutral-3">
                  <div className="text-[13px] font-bold text-neutral-11 mb-1">轻量反馈</div>
                  <p className="text-[12px] text-neutral-6">非核心路径使用 <span className="text-brand font-bold">Toast</span> 或 <span className="text-brand font-bold">Message</span>，避免打断用户心流。</p>
                </div>
                <div className="p-4 rounded-2xl bg-neutral-2/50 border border-neutral-3">
                  <div className="text-[13px] font-bold text-neutral-11 mb-1">强制引导</div>
                  <p className="text-[12px] text-neutral-6">涉及资产安全或不可逆操作时，必须使用 <span className="text-error font-bold">Dialog</span> 进行强交互确认。</p>
                </div>
              </div>
           </div>
        </div>
      </div>

      {/* Simulator View - Optimized for Interaction Section scrolling */}
      <div className="sticky top-[84px] hidden xl:flex items-start justify-center pointer-events-none z-40">
        <div className="pointer-events-auto bg-neutral-1/40 backdrop-blur-3xl rounded-[70px] p-6 border border-neutral-3 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.05)_inset] ring-1 ring-black/5 brand-glow">
          <ComponentPreview title={feedbackItems.find(i => i.id === selectedFeed)?.name || 'Feedback'}>
            <div className="h-full">
              {selectedFeed === 'Toast' && <ToastPreview />}
              {selectedFeed === 'Dialog' && <DialogPreview />}
              {selectedFeed === 'Popup' && <PopupPreview />}
              {selectedFeed === 'Message' && <MessagePreview />}
              {selectedFeed === 'Loading' && <LoadingPreview />}
              {selectedFeed === 'DropdownMenu' && <DropdownMenuPreview />}
              {selectedFeed === 'SwipeCell' && <SwipeCellPreview />}
            </div>
          </ComponentPreview>
        </div>
      </div>
    </div>
  );
};


const IconSection = () => {
  const [iconMode, setIconMode] = useState<'static' | 'dynamic'>('static');
  const [lineWidth, setLineWidth] = useState(1.5);
  const [iconType, setIconType] = useState<'outline' | 'filled'>('outline');
  const [colorMode, setColorMode] = useState<'single' | 'double'>('single');
  const [color1, setColor1] = useState('#171717');
  const [color2, setColor2] = useState('#0052d9');
  const [searchQuery, setSearchQuery] = useState('');
  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  const [selectedIcon, setSelectedIcon] = useState<any>(null);
  const [previewSize, setPreviewSize] = useState(256);

  const categories = [
    { id: 'all', name: '全部分库', icon: Box },
    { id: 'direction', name: '方向指示', icon: MoveRight },
    { id: 'user', name: '核心人物', icon: User },
    { id: 'system', name: '通用系统', icon: Settings },
    { id: 'edit', name: '编辑录入', icon: Edit },
    { id: 'media', name: '多媒体类', icon: Music },
  ];
  const [activeCategory, setActiveCategory] = useState('all');
  const [showDeco, setShowDeco] = useState(true);
  const [decoType, setDecoType] = useState('sparkle');
  const [decoPos, setDecoPos] = useState('tr'); // top-right

  const decoOptions = [
    { id: 'sparkle', name: '星光', icon: Sparkles },
    { id: 'magic', name: '魔法', icon: Wand2 },
    { id: 'bot', name: '助手', icon: Bot },
    { id: 'zap', name: '能量', icon: Zap },
    { id: 'star', name: '优质', icon: Star },
    { id: 'cpu', name: '计算', icon: Cpu },
    { id: 'atom', name: '核心', icon: Atom },
    { id: 'brain', name: '智慧', icon: Brain },
    { id: 'lightbulb', name: '灵感', icon: Lightbulb },
    { id: 'orbit', name: '协同', icon: Orbit },
    { id: 'circuit', name: '逻辑', icon: CircuitBoard },
    { id: 'waves', name: '律动', icon: Waves },
    { id: 'shield', name: '安全', icon: Shield },
    { id: 'dna', name: '进化', icon: Dna },
    { id: 'command', name: '命令', icon: Command },
    { id: 'fingerprint', name: '生物', icon: Fingerprint },
  ];

  const posOptions = [
    { id: 'tr', name: '右上' },
    { id: 'br', name: '右下' },
    { id: 'tl', name: '左上' },
    { id: 'bl', name: '左下' },
    { id: 'center', name: '中心' },
  ];

  const iconsSet = [
    // --- System & Essential ---
    { icon: Home, name: 'Home 主页', category: 'system' },
    { icon: Settings, name: 'Settings 设置', category: 'system' },
    { icon: Bell, name: 'Bell 通知', category: 'system' },
    { icon: Search, name: 'Search 搜索', category: 'system' },
    { icon: MessageSquare, name: 'MessageSquare 消息', category: 'system' },
    { icon: Smartphone, name: 'Smartphone 手机', category: 'system' },
    { icon: Info, name: 'Info 详情', category: 'system' },
    { icon: X, name: 'X 关闭', category: 'system' },
    { icon: Zap, name: 'Zap 快捷', category: 'system' },
    { icon: Globe, name: 'Globe 地图', category: 'system' },
    { icon: FileText, name: 'FileText 文件', category: 'system' },
    { icon: ShoppingCart, name: 'ShoppingCart 购物车', category: 'system' },
    { icon: LogOut, name: 'LogOut 注销', category: 'system' },
    { icon: Menu, name: 'Menu 菜单', category: 'system' },
    { icon: Folder, name: 'Folder 文件夹', category: 'system' },
    { icon: Mail, name: 'Mail 邮件', category: 'system' },
    { icon: Lock, name: 'Lock 锁定', category: 'system' },
    { icon: Unlock, name: 'Unlock 解锁', category: 'system' },
    { icon: Calendar, name: 'Calendar 日历', category: 'system' },
    { icon: MapPin, name: 'MapPin 定位', category: 'system' },
    { icon: Clock, name: 'Clock 时间', category: 'system' },
    { icon: Link, name: 'Link 链接', category: 'system' },
    { icon: Share2, name: 'Share2 分享', category: 'system' },
    { icon: Heart, name: 'Heart 收藏', category: 'system' },
    { icon: Star, name: 'Star 星标', category: 'system' },
    { icon: ThumbsUp, name: 'ThumbsUp 点赞', category: 'system' },
    { icon: ThumbsDown, name: 'ThumbsDown 踩下', category: 'system' },
    { icon: Battery, name: 'Battery 电量', category: 'system' },
    { icon: Wifi, name: 'Wifi 网络', category: 'system' },
    { icon: Cloud, name: 'Cloud 云端', category: 'system' },

    // --- Users ---
    { icon: User, name: 'User 用户', category: 'user' },
    { icon: ShieldCheck, name: 'ShieldCheck 安全中心', category: 'user' },
    { icon: UserPlus, name: 'UserPlus 添加用户', category: 'user' },
    { icon: UserMinus, name: 'UserMinus 移除用户', category: 'user' },
    { icon: PhoneCall, name: 'PhoneCall 通话', category: 'user' },
    { icon: BellRing, name: 'BellRing 提醒', category: 'user' },

    // --- Directions ---
    { icon: ChevronRight, name: 'ChevronRight 向右', category: 'direction' },
    { icon: ChevronLeft, name: 'ChevronLeft 向左', category: 'direction' },
    { icon: ChevronDown, name: 'ChevronDown 向下', category: 'direction' },
    { icon: ChevronUp, name: 'ChevronUp 向上', category: 'direction' },
    { icon: ArrowRight, name: 'ArrowRight 箭头右', category: 'direction' },
    { icon: ArrowLeft, name: 'ArrowLeft 箭头左', category: 'direction' },
    { icon: ArrowDown, name: 'ArrowDown 箭头下', category: 'direction' },
    { icon: ArrowUp, name: 'ArrowUp 箭头上', category: 'direction' },
    { icon: RefreshCw, name: 'RefreshCw 刷新', category: 'direction' },
    { icon: ExternalLink, name: 'ExternalLink 外部链接', category: 'direction' },

    // --- Edit & Tools ---
    { icon: Plus, name: 'Plus 新增', category: 'edit' },
    { icon: Trash2, name: 'Trash2 删除', category: 'edit' },
    { icon: Edit, name: 'Edit 编辑', category: 'edit' },
    { icon: Copy, name: 'Copy 复制', category: 'edit' },
    { icon: Check, name: 'Check 完成', category: 'edit' },
    { icon: CheckCircle2, name: 'CheckCircle2 成功', category: 'edit' },
    { icon: Filter, name: 'Filter 筛选', category: 'edit' },
    { icon: Sliders, name: 'Sliders 调节', category: 'edit' },
    { icon: Download, name: 'Download 下载', category: 'edit' },
    { icon: Save, name: 'Save 保存', category: 'edit' },
    { icon: Palette, name: 'Palette 调色盘', category: 'edit' },
    { icon: Eye, name: 'Eye 预览', category: 'edit' },

    // --- Media ---
    { icon: Music, name: 'Music 音频', category: 'media' },
    { icon: Play, name: 'Play 播放', category: 'media' },
    { icon: Pause, name: 'Pause 暂停', category: 'media' },
    { icon: Camera, name: 'Camera 相机', category: 'media' },
    { icon: ImageIcon, name: 'Image 图片', category: 'media' },
    { icon: Video, name: 'Video 视频', category: 'media' },
    { icon: Maximize, name: 'Maximize 全屏', category: 'media' }
  ];

  const filteredIcons = iconsSet.filter(i => {
    const matchesSearch = i.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || i.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleReset = () => {
    setLineWidth(1.5);
    setIconType('outline');
    setColorMode('single');
    setColor1('#171717');
    setColor2('#0052d9');
  };

  const getFillColor = () => {
    if (iconType === 'outline') return 'none';
    if (colorMode === 'single') return color1;
    return color2;
  };

  const IconRenderer = ({ icon: Icon, size, strokeWidth, color, fill, decoColor, showDeco, decoType, decoPos, isDynamic, iconName, id, className }: any) => {
    const DecoIcon = decoOptions.find(d => d.id === decoType)?.icon || Sparkles;
    
    const getPosTransform = (pos: string) => {
      switch(pos) {
        case 'tr': return "translate(15, -3) scale(0.45)";
        case 'br': return "translate(15, 15) scale(0.45)";
        case 'tl': return "translate(-3, -3) scale(0.45)";
        case 'bl': return "translate(-3, 15) scale(0.45)";
        case 'center': return "translate(6.6, 6.6) scale(0.45)";
        default: return "translate(15, -3) scale(0.45)";
      }
    };

    const getAnimationProps = (name: string) => {
      if (!name) return {
        animate: { rotate: [0, -2, 2, 0], scale: [1, 1.02, 1] },
        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
      };
      
      const lowerName = name.toLowerCase();
      
      // 1. 旋转动效 (Spin/Rotate) - 更平滑的匀速旋转，适用于加载或设置状态
      if (/settings|sync|refresh|sun|loader|load/.test(lowerName)) {
        return {
          animate: { rotate: [0, 360] },
          transition: { duration: 4, repeat: Infinity, ease: "linear" }
        };
      }
      // 2. 呼吸/脉冲 (Pulse/Breath) - 有机生命体律动，带有些许 anticipative 的回弹节奏
      if (/heart|bell|activity|sparkle|star|zap/.test(lowerName)) {
        return {
          animate: { scale: [1, 1.12, 1, 1], opacity: [1, 0.8, 1, 1] },
          transition: { duration: 2.5, repeat: Infinity, times: [0, 0.15, 0.35, 1], ease: "anticipate" }
        };
      }
      // 3. 跳动/蹦跳 (Bounce/Jump) - 明确的抛物线弹簧重力感
      if (/arrow|chevron|play|send|message|upload|download/.test(lowerName)) {
        return {
          animate: { y: [0, -5, 0, -2, 0] },
          transition: { duration: 2, repeat: Infinity, ease: "circOut", times: [0, 0.2, 0.4, 0.6, 1] }
        };
      }
      // 4. 动感摇晃 (Wiggle/Shake) - 急促强烈的来回震动反馈，强化视觉警示
      if (/alert|warning|risk|trash|delete|printer|x/.test(lowerName)) {
        return {
          animate: { rotate: [0, -8, 8, -6, 6, 0] },
          transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut", times: [0, 0.1, 0.2, 0.3, 0.4, 1] }
        };
      }
      // 5. 悬浮/漂移 (Float/Slide) - 缓慢的失重漂浮感，模拟流体介质中的微动
      if (/cloud|monitor|laptop|file|car|globe|transport|folder/.test(lowerName)) {
        return {
          animate: { y: [0, -3, 0], x: [0, 2, 0] },
          transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
        };
      }
      
      // 兜底微动效 - 最微弱的元素呼吸
      return {
        animate: { scale: [1, 1.04, 1] },
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      };
    };

    const animProps = isDynamic ? getAnimationProps(iconName) : {};

    return (
      <motion.svg 
        id={id}
        width={size} 
        height={size} 
        viewBox="-4 -4 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
        {...animProps}
      >
        <g transform={showDeco ? "translate(0, 0.5) scale(0.95)" : ""}>
          <Icon 
            size={24} 
            strokeWidth={strokeWidth} 
            color={color} 
            fill={fill} 
          />
        </g>
        {showDeco && (
          <g transform={getPosTransform(decoPos)}>
            <DecoIcon 
              size={24} 
              strokeWidth={strokeWidth * 1.2}
              color={decoColor}
              fill={fill !== 'none' ? decoColor : 'none'}
            />
          </g>
        )}
      </motion.svg>
    );
  };

  const copyCode = (iconName: string) => {
    const svgElement = document.getElementById('preview-svg');
    if (svgElement) {
      const svgCode = svgElement.outerHTML;
      navigator.clipboard.writeText(svgCode).then(() => {
        setCopySuccess(iconName);
        setTimeout(() => setCopySuccess(null), 2000);
      });
    }
  };

  const copyReactCode = (item: any) => {
    const componentName = item.name.split(' ')[0];
    const code = `<${componentName} size={${24}} strokeWidth={${lineWidth}} color="${color1}" fill="${getFillColor() === 'none' ? 'none' : (colorMode === 'double' ? color2 : color1)}" />`;
    navigator.clipboard.writeText(code).then(() => {
      setCopySuccess(item.name + '-react');
      setTimeout(() => setCopySuccess(null), 2000);
    });
  };

  const downloadFile = (type: 'svg' | 'png', iconName: string) => {
    const svgElement = document.getElementById('preview-svg');
    if (!svgElement) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const fileName = `gl-icon-${iconName.toLowerCase()}-${iconType}`;

    if (type === 'svg') {
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);
      const downloadLink = document.createElement('a');
      downloadLink.href = svgUrl;
      downloadLink.download = `${fileName}.svg`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(svgUrl);
    } else {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        canvas.width = previewSize;
        canvas.height = previewSize;
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, previewSize, previewSize);
          const pngUrl = canvas.toDataURL('image/png');
          const downloadLink = document.createElement('a');
          downloadLink.href = pngUrl;
          downloadLink.download = `${fileName}.png`;
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        }
        URL.revokeObjectURL(url);
      };
      img.src = url;
    }
  };

  return (
    <div className="space-y-8 pb-20">
      {/* Tool Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-6 bg-neutral-0 dark:bg-neutral-1 rounded-3xl border border-neutral-3 shadow-sm shadow-black/5">
         <div className="flex flex-wrap gap-1 p-1 bg-neutral-2 dark:bg-neutral-3/30 rounded-xl">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap
                  ${activeCategory === cat.id 
                    ? 'bg-neutral-11 dark:bg-brand text-neutral-0 dark:text-white shadow-lg scale-105' 
                    : 'text-neutral-7 hover:text-neutral-11 hover:bg-neutral-3 dark:hover:bg-neutral-4/30'}`}
              >
                <cat.icon size={14} />
                {cat.name}
              </button>
            ))}
         </div>
         <div className="relative w-full lg:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-6" size={16} />
            <input 
              type="text" 
              placeholder="搜索组件或图标名称..." 
                            value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-neutral-3 border-transparent border rounded-xl text-xs outline-none focus:bg-neutral-0 dark:focus:bg-neutral-2 focus:border-brand/30 transition-all font-medium"
            />
         </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Configuration Panel */}
        <div className="w-full lg:w-80 shrink-0 space-y-10 animate-fade-in lg:sticky lg:top-24">
           {/* Icon Mode Section */}
           <div className="space-y-4">
              <label className="text-[14px] font-bold text-neutral-11">图标模式</label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-neutral-2 border border-neutral-3 rounded-xl">
                 <button 
                   onClick={() => setIconMode('static')}
                   className={`py-2 text-[12px] font-bold rounded-lg transition-all ${iconMode === 'static' ? 'bg-brand text-white shadow-sm' : 'text-neutral-6 hover:text-neutral-8'}`}
                 >静态绘制</button>
                 <button 
                   onClick={() => setIconMode('dynamic')}
                   className={`py-2 text-[12px] font-bold rounded-lg transition-all ${iconMode === 'dynamic' ? 'bg-purple-600 text-white shadow-sm' : 'text-neutral-6 hover:text-neutral-8'}`}
                 >动态渲染 (Animation)</button>
              </div>
           </div>

           {/* Icon Type Section */}
           <div className="space-y-4">
              <label className="text-[14px] font-bold text-neutral-11">Icon 类型</label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-neutral-2 border border-neutral-3 rounded-xl">
                 <button 
                   onClick={() => setIconType('outline')}
                   className={`py-2 text-[12px] font-bold rounded-lg transition-all ${iconType === 'outline' ? 'bg-brand text-white shadow-sm' : 'text-neutral-6 hover:text-neutral-8'}`}
                 >描边</button>
                 <button 
                   onClick={() => setIconType('filled')}
                   className={`py-2 text-[12px] font-bold rounded-lg transition-all ${iconType === 'filled' ? 'bg-brand text-white shadow-sm' : 'text-neutral-6 hover:text-neutral-8'}`}
                 >描边-填充</button>
              </div>
           </div>

           {/* Icon Color Section */}
           <div className="space-y-4">
              <label className="text-[14px] font-bold text-neutral-11">图标颜色</label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-neutral-2 border border-neutral-3 rounded-xl">
                 <button 
                   onClick={() => setColorMode('single')}
                   className={`py-2 text-[12px] font-bold rounded-lg transition-all ${colorMode === 'single' ? 'bg-neutral-0 dark:bg-neutral-2 shadow-sm text-neutral-12' : 'text-neutral-6 hover:text-neutral-8'}`}
                 >单色</button>
                 <button 
                   onClick={() => setColorMode('double')}
                   className={`py-2 text-[12px] font-bold rounded-lg transition-all ${colorMode === 'double' ? 'bg-neutral-0 dark:bg-neutral-2 shadow-sm text-neutral-12' : 'text-neutral-6 hover:text-neutral-8'}`}
                 >双色 (智慧款)</button>
              </div>
              
              {colorMode === 'double' && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="p-4 bg-brand-light/20 border border-brand/10 rounded-xl space-y-3"
                >
                   <div className="flex items-center justify-between">
                     <span className="text-[11px] font-bold text-brand">开启智慧修饰 (AI Sparkle)</span>
                     <button 
                        onClick={() => setShowDeco(!showDeco)}
                        className={`w-8 h-4 rounded-full relative transition-colors ${showDeco ? 'bg-brand' : 'bg-neutral-4'}`}
                     >
                        <div className={`absolute top-0.5 w-3 h-3 bg-neutral-0 dark:bg-neutral-2 rounded-full transition-all ${showDeco ? 'left-4.5' : 'left-0.5'}`} />
                     </button>
                   </div>
                   <p className="text-[10px] text-brand/60 leading-relaxed">参考 GL Design 智慧图标规范，在图标右上角添加星光装饰。建议双色模式下使用。</p>
                   
                   {showDeco && (
                     <motion.div 
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       className="space-y-4 pt-2 border-t border-brand/10"
                     >
                        <div className="space-y-2">
                          <label className="text-[11px] font-bold text-neutral-6 uppercase">修饰类型</label>
                          <div className="grid grid-cols-8 gap-1.5">
                             {decoOptions.map(opt => (
                               <button 
                                 key={opt.id}
                                 onClick={() => setDecoType(opt.id)}
                                 className={`p-2 rounded-lg transition-all ${decoType === opt.id ? 'bg-brand text-white shadow-md' : 'bg-neutral-0 dark:bg-neutral-2 border border-neutral-3 text-neutral-6 hover:text-neutral-11'}`}
                                 title={opt.name}
                                >
                                 <opt.icon size={14} />
                               </button>
                             ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[11px] font-bold text-neutral-6 uppercase">修饰位置</label>
                          <div className="grid grid-cols-5 gap-1 p-1 bg-neutral-2 border border-neutral-3 rounded-lg">
                             {posOptions.map(opt => (
                               <button 
                                 key={opt.id}
                                 onClick={() => setDecoPos(opt.id)}
                                 className={`py-1.5 text-[10px] font-bold rounded-md transition-all ${decoPos === opt.id ? 'bg-neutral-0 dark:bg-neutral-2 shadow-sm text-neutral-12 border border-neutral-3' : 'text-neutral-6 hover:text-neutral-8'}`}
                               >
                                 {opt.name}
                               </button>
                             ))}
                          </div>
                        </div>
                     </motion.div>
                   )}
                </motion.div>
              )}
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-neutral-6 uppercase">线条颜色1</label>
                  <div className="flex items-center gap-2 p-2 bg-neutral-2 border border-neutral-3 rounded-lg overflow-hidden group hover:border-brand/40 transition-colors">
                    <div className="relative w-8 h-8 rounded shrink-0 border border-neutral-3 overflow-hidden shadow-sm">
                      <input 
                        type="color" 
                        value={color1} 
                        onChange={(e) => setColor1(e.target.value)} 
                        className="absolute inset-[-50%] w-[200%] h-[200%] cursor-pointer"
                      />
                    </div>
                    <span className="text-[11px] font-mono text-neutral-11 font-bold">{color1.toUpperCase()}</span>
                  </div>
                </div>

                <div className={`space-y-2 transition-opacity ${colorMode === 'double' ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
                  <label className="text-[11px] font-bold text-neutral-6 uppercase">线条颜色2</label>
                  <div className="flex items-center gap-2 p-2 bg-neutral-2 border border-neutral-3 rounded-lg overflow-hidden group hover:border-brand/40 transition-colors">
                    <div className="relative w-8 h-8 rounded shrink-0 border border-neutral-3 overflow-hidden shadow-sm">
                      <input 
                        type="color" 
                        value={color2} 
                        onChange={(e) => setColor2(e.target.value)} 
                        disabled={colorMode === 'single'}
                        className="absolute inset-[-50%] w-[200%] h-[200%] cursor-pointer"
                      />
                    </div>
                    <span className="text-[11px] font-mono text-neutral-11 font-bold">{color2.toUpperCase()}</span>
                  </div>
                </div>
              </div>
           </div>

           <div className="space-y-4">
              <div className="flex items-center justify-between">
                 <label className="text-[14px] font-bold text-neutral-11 flex items-center gap-2">
                    线条粗细
                 </label>
                 <span className="text-[11px] font-mono font-bold text-brand bg-brand-light px-2 py-0.5 rounded">{lineWidth}pt</span>
              </div>
              <input 
                type="range" min="0.5" max="3" step="0.5" value={lineWidth}
                onChange={(e) => setLineWidth(Number(e.target.value))}
                className="w-full accent-brand h-1.5 bg-neutral-3 rounded-lg appearance-none cursor-pointer"
              />
           </div>

           <button 
             onClick={handleReset}
             className="w-full py-3 bg-neutral-1 text-neutral-7 border border-neutral-3 rounded-xl font-bold text-sm hover:bg-neutral-2 hover:text-neutral-12 transition-all active:scale-95"
           >
             重置
           </button>
        </div>

        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
           {filteredIcons.map((item, idx) => (
             <motion.div
               key={item.name}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.02 }}
               whileHover={{ y: -4, scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
               onClick={() => setSelectedIcon(item)}
               className="group relative p-8 bg-neutral-0 border border-neutral-3 rounded-2xl flex flex-col items-center justify-center gap-6 transition-all hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/5 cursor-pointer"
             >
                <div className="relative">
                   <IconRenderer 
                     icon={item.icon}
                     iconName={item.name}
                     size={32}
                     strokeWidth={lineWidth}
                     color={color1}
                     fill={getFillColor()}
                     decoColor={colorMode === 'double' ? color2 : color1}
                     showDeco={showDeco}
                     decoType={decoType}
                     decoPos={decoPos}
                     isDynamic={iconMode === 'dynamic'}
                     className="transition-all duration-300 relative z-10"
                   />
                   <div className={`absolute inset-0 ${iconMode === 'dynamic' ? 'bg-purple-500/5 group-hover:bg-purple-500/10 blur-2xl' : 'bg-brand/5 blur-xl group-hover:bg-brand/20'} transition-all rounded-full`} />
                </div>
                <div>
                   <div className={`text-[13px] font-extrabold transition-colors text-center ${iconMode === 'dynamic' ? 'text-neutral-12 group-hover:text-purple-600' : 'text-neutral-12 group-hover:text-brand'}`}>{item.name}</div>
                   <div className="text-[10px] text-neutral-6 uppercase tracking-tighter text-center mt-1 font-bold">{item.category}</div>
                </div>
                {iconMode === 'dynamic' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-3 right-3 flex items-center gap-1.5 bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 px-2 py-0.5 rounded-full border border-purple-500/20 shadow-sm backdrop-blur-md"
                  >
                    <motion.span 
                      animate={{ opacity: [1, 0.3, 1] }} 
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="w-1.5 h-1.5 bg-purple-500 rounded-full" 
                    />
                    <span className="text-[9px] font-bold uppercase tracking-wider">Live</span>
                  </motion.div>
                )}
             </motion.div>
           ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedIcon && (
          <div className="fixed inset-0 z-50 flex justify-end overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIcon(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="relative bg-neutral-0 dark:bg-neutral-2 w-[420px] h-full shadow-2xl flex flex-col border-l border-neutral-3 z-10"
            >
               <div className="p-8 flex-1 overflow-y-auto">
                  <div className="flex justify-between items-center mb-8">
                     <h3 className="text-2xl font-black text-neutral-11">{selectedIcon.name}</h3>
                     <button onClick={() => setSelectedIcon(null)} className="p-2 hover:bg-neutral-2 rounded-full transition-colors"><X/></button>
                  </div>
                  <div className="aspect-square bg-neutral-1 rounded-3xl border border-neutral-3 flex items-center justify-center mb-8">
                    <IconRenderer 
                      id="preview-svg"
                      icon={selectedIcon.icon}
                      iconName={selectedIcon.name}
                      size={200}
                      strokeWidth={lineWidth}
                      color={color1}
                      fill={getFillColor()}
                      decoColor={colorMode === 'double' ? color2 : color1}
                      showDeco={showDeco}
                      decoType={decoType}
                      decoPos={decoPos}
                      isDynamic={iconMode === 'dynamic'}
                    />
                  </div>
                  <div className="space-y-4">
                     {iconMode === 'dynamic' ? (
                       <div className="space-y-3">
                         <button onClick={() => setCopySuccess(selectedIcon.name)} className="w-full py-4 bg-purple-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-purple-700 shadow-lg shadow-purple-600/20 transition-all">
                            <Layers size={18}/> {copySuccess === selectedIcon.name ? '代码已复制!' : '复制 JSON 动效代码 (Lottie)'}
                         </button>
                         <button onClick={() => alert('GIF 渲染引擎启动中，稍后可下载...')} className="w-full py-4 bg-neutral-11 dark:bg-neutral-3 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black dark:hover:bg-neutral-4 shadow-lg transition-all">
                            <ImageIcon size={18}/> 导出为 GIF (120fps)
                         </button>
                       </div>
                     ) : (
                       <div className="space-y-3">
                         <button onClick={() => downloadFile('svg', selectedIcon.name)} className="w-full py-4 bg-brand text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-hover shadow-lg shadow-brand/20 transition-all">
                            <Download size={18}/> 导出高清 SVG
                         </button>
                         <button onClick={() => downloadFile('png', selectedIcon.name)} className="w-full py-4 bg-neutral-11 dark:bg-neutral-3 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black dark:hover:bg-neutral-4 shadow-lg transition-all">
                            <ImageIcon size={18}/> 下载 PNG
                         </button>
                       </div>
                     )}
                  </div>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const LowFiSection = () => (
  <div className="space-y-6 animate-slide-up">
    <div className="bg-neutral-1 p-6 rounded-xl border border-neutral-3">
      <h3 className="font-bold mb-4 text-neutral-11 text-sm uppercase tracking-widest">Lo-fi Wireframe Sample</h3>
      <div className="aspect-[9/16] max-w-[280px] mx-auto bg-neutral-0 dark:bg-neutral-2 border-2 border-dashed border-neutral-3 rounded-[32px] p-6 flex flex-col gap-6">
         <div className="h-10 bg-neutral-2 rounded-lg border border-neutral-3" />
         <div className="h-40 bg-neutral-1 rounded-2xl border border-neutral-3 flex items-center justify-center text-neutral-4 uppercase text-[10px] font-bold">Image Area</div>
         <div className="space-y-3">
            <div className="h-4 w-3/4 bg-neutral-3 rounded" />
            <div className="h-3 w-1/2 bg-neutral-2 rounded" />
         </div>
      </div>
    </div>
  </div>
);

const MotionSystemSection = () => {
  const [activeCurve, setActiveCurve] = useState('standard');
  const [isPlaying, setIsPlaying] = useState(false);

  const curves = {
    standard: [0.4, 0, 0.2, 1],
    emphasized: [0.2, 0, 0, 1],
    decelerate: [0, 0, 0.2, 1],
    accelerate: [0.4, 0, 1, 1],
  };

  const principles = [
    {
      title: '即时响应 (Responsiveness)',
      desc: '反馈时间 < 100ms。所有用户输入应得到即时视觉肯定。',
      icon: <Zap size={20} />,
      color: 'bg-brand'
    },
    {
      title: '自然逻辑 (Natural Logic)',
      desc: '遵循物理规律，使用缓入缓出而非匀速。',
      icon: <Activity size={20} />,
      color: 'bg-success'
    },
    {
      title: '层级透视 (Space & Hierarchy)',
      desc: '动效揭示组件间的空间关系（父子关系、展开折叠）。',
      icon: <Layers size={20} />,
      color: 'bg-warning'
    },
    {
      title: '意图焦点 (Focus)',
      desc: '引导注意力到关键信息，避免无谓的装饰。',
      icon: <Target size={20} />,
      color: 'bg-error'
    }
  ];

  return (
    <div className="space-y-16 animate-slide-up pb-20">
      {/* 01: Hero Intro */}
      <div className="relative p-10 bg-neutral-11 rounded-[48px] overflow-hidden group">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/30 blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse" />
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
            <span className="w-1.5 h-1.5 bg-brand rounded-full" />
            <span className="text-[10px] font-black text-white/60 tracking-widest uppercase">UX Experience Standard</span>
          </div>
          <h2 className="text-4xl font-black text-white tracking-tighter">流畅性是设计的第一生产力</h2>
          <p className="text-white/60 font-medium leading-relaxed text-lg">
            在移动端产品中，动效不仅仅是装饰，它是连接“静态视觉”与“操作逻辑”的神经脉络。一个极致的动效体系应具备物理的一致性与感官的轻盈感。
          </p>
        </div>
      </div>

      {/* 02: Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {principles.map((p, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -8 }}
            className="p-8 bg-neutral-1 border border-neutral-3 rounded-3xl space-y-4 shadow-sm hover:shadow-xl hover:border-brand/20 transition-all"
          >
            <div className={`w-12 h-12 ${p.color} text-white rounded-2xl flex items-center justify-center shadow-lg shadow-black/10`}>
              {p.icon}
            </div>
            <h4 className="font-bold text-neutral-11">{p.title}</h4>
            <p className="text-xs text-neutral-6 leading-relaxed font-medium">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* 03: Curves Playground */}
        <div className="bg-neutral-1 p-8 rounded-[40px] border border-neutral-3 space-y-8">
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-black text-neutral-11">曲线实验室 (Curve Lab)</h4>
            <button 
              onClick={() => {
                setIsPlaying(true);
                setTimeout(() => setIsPlaying(false), 800);
              }}
              className="p-3 bg-brand text-white rounded-2xl shadow-lg active:scale-90 transition-transform"
            >
              <Play size={18} fill="currentColor" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="h-24 bg-neutral-2 rounded-2xl relative border border-neutral-3 overflow-hidden flex items-center px-8">
               <motion.div 
                 animate={isPlaying ? { x: 'calc(100% - 64px)' } : { x: 0 }}
                 transition={{ duration: 0.6, ease: (curves as any)[activeCurve] }}
                 className="w-16 h-16 bg-brand rounded-2xl shadow-xl shadow-brand/20 flex items-center justify-center text-white"
               >
                 <Zap size={24} />
               </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {Object.entries(curves).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setActiveCurve(key)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    activeCurve === key 
                      ? 'bg-neutral-11 text-white border-neutral-11 shadow-lg' 
                      : 'bg-neutral-0 dark:bg-neutral-2 border-neutral-3 text-neutral-6 hover:border-neutral-11'
                  }`}
                >
                  <div className="text-[12px] font-black uppercase tracking-widest mb-1">{key}</div>
                  <div className="text-[10px] font-mono opacity-60 truncate">cubic-bezier({value.join(', ')})</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 04: Timing Tokens */}
        <div className="bg-neutral-1 p-8 rounded-[40px] border border-neutral-3 space-y-8">
          <h4 className="text-lg font-black text-neutral-11">时间令牌 (Timing Tokens)</h4>
          <div className="space-y-4">
             {[
               { id: 'T1', name: '极速响应', val: '100ms', desc: '微交互，复选框，微组件反馈' },
               { id: 'T2', name: '标准转场', val: '250ms', desc: '列表展开，页签切换' },
               { id: 'T3', name: '深层入场', val: '380ms', desc: '大面积视图，弹窗入场' },
               { id: 'T4', name: '全屏覆盖', val: '450ms', desc: '顶级导航，沉浸式视图切换' },
             ].map((t) => (
               <div key={t.id} className="p-4 bg-neutral-0 dark:bg-neutral-2 border border-neutral-3 rounded-2xl flex items-center gap-6 group hover:border-brand/40 transition-colors">
                 <div className="w-12 h-12 bg-neutral-2 rounded-xl flex items-center justify-center font-black text-neutral-11 text-sm">{t.id}</div>
                 <div className="flex-1">
                    <div className="text-[13px] font-bold text-neutral-11">{t.name}</div>
                    <div className="text-[11px] text-neutral-6 font-medium">{t.desc}</div>
                 </div>
                 <div className="text-brand font-black font-mono text-[14px]">{t.val}</div>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* 05: Pattern Showcase */}
      <div className="space-y-8">
         <div className="flex items-end justify-between">
            <h4 className="text-2xl font-black text-neutral-11 tracking-tighter">经典交互范式 (Pattern Showcase)</h4>
            <div className="text-sm font-bold text-neutral-6">Interaction Model V2.6</div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
               whileHover={{ y: -8 }}
               className="bg-neutral-0 dark:bg-neutral-2 border border-neutral-3 rounded-[40px] p-8 shadow-sm space-y-6"
            >
               <div className="flex items-center gap-3">
                  <div className="p-3 bg-brand-light text-brand rounded-2xl"><ArrowUpRight size={20}/></div>
                  <h5 className="font-bold text-neutral-11 text-sm">层级沉浸 (Zoom In)</h5>
               </div>
               <div className="aspect-[4/3] bg-neutral-1 rounded-3xl border border-neutral-2 flex items-center justify-center overflow-hidden relative">
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-20 h-20 bg-brand/20 rounded-2xl border border-brand/20" />
                  <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute text-[10px] font-bold text-brand uppercase">Expanding View</motion.div>
               </div>
               <p className="text-[11px] text-neutral-6 leading-relaxed font-medium">子视角的入场，通过容器的比例扩张实现视角的平稳推入，保持导航层级的清晰。</p>
            </motion.div>

            <motion.div 
               whileHover={{ y: -8 }}
               className="bg-neutral-0 dark:bg-neutral-2 border border-neutral-3 rounded-[40px] p-8 shadow-sm space-y-6"
            >
               <div className="flex items-center gap-3">
                  <div className="p-3 bg-success-light text-success rounded-2xl"><Layers size={20}/></div>
                  <h5 className="font-bold text-neutral-11 text-sm">交错入场 (Staggered)</h5>
               </div>
               <div className="aspect-[4/3] bg-neutral-1 rounded-3xl border border-neutral-2 p-6 space-y-2">
                  {[0,1,2,3].map(i => (
                    <motion.div key={i} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.1, repeat: Infinity, repeatDelay: 1 }} className="h-6 w-full bg-success/10 rounded-lg" />
                  ))}
               </div>
               <p className="text-[11px] text-neutral-6 leading-relaxed font-medium">大批量内容列表，通过毫秒级的交错延时入场，减轻页面的沉重感，提升愉悦度。</p>
            </motion.div>

            <motion.div 
               whileHover={{ y: -8 }}
               className="bg-neutral-0 dark:bg-neutral-2 border border-neutral-3 rounded-[40px] p-8 shadow-sm space-y-6"
            >
               <div className="flex items-center gap-3">
                  <div className="p-3 bg-warning-light text-warning rounded-2xl"><Zap size={20}/></div>
                  <h5 className="font-bold text-neutral-11 text-sm">非对称弹性 (Elastic)</h5>
               </div>
               <div className="aspect-[4/3] bg-neutral-1 rounded-3xl border border-neutral-2 flex items-center justify-center">
                  <motion.div animate={{ y: [-40, 20, 0] }} transition={{ repeat: Infinity, repeatDelay: 1, duration: 1 }} className="w-12 h-12 bg-warning rounded-xl" />
               </div>
               <p className="text-[11px] text-neutral-6 leading-relaxed font-medium">使用高刚度、低阻尼的弹性曲线，反馈快速而生动，适用于弹窗、浮窗等临时交互层。</p>
            </motion.div>
         </div>
      </div>

      {/* 06: Gesture & Feedback */}
      <div className="bg-neutral-1 p-10 rounded-[48px] border border-neutral-3 space-y-10">
         <div className="max-w-xl space-y-2">
            <h4 className="text-xl font-black text-neutral-11">手势与物理反馈 (Gestures & Physics)</h4>
            <p className="text-sm text-neutral-6 font-medium">在移动端，动效必须与手指的触碰实时同步。动效不仅是视觉变化，更是触觉的延伸。</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand/10 text-brand rounded-full flex items-center justify-center font-bold text-xs">01</div>
                  <div className="font-bold text-neutral-11">直接操控 (Direct Manipulation)</div>
               </div>
               <div className="p-1 bg-neutral-2 rounded-3xl border border-neutral-3 overflow-hidden">
                  <div className="bg-neutral-0 dark:bg-neutral-2 p-8 group overflow-hidden relative">
                     <motion.div 
                        drag="x"
                        dragConstraints={{ left: 0, right: 200 }}
                        dragElastic={0.2}
                        className="w-16 h-16 bg-brand rounded-2xl cursor-grab active:cursor-grabbing flex items-center justify-center text-white shadow-xl"
                     >
                        <ArrowRight size={24} />
                     </motion.div>
                     <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[10px] font-black text-neutral-4 uppercase tracking-widest">Swipe Me</div>
                  </div>
               </div>
               <p className="text-xs text-neutral-6 leading-relaxed">响应速度与手指移动速度 1:1 同步。避免“延迟感”，给用户一种可以抓住界面的心理安全感。</p>
            </div>

            <div className="space-y-6">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-success/10 text-success rounded-full flex items-center justify-center font-bold text-xs">02</div>
                  <div className="font-bold text-neutral-11">边界反馈 (Boundary Feedback)</div>
               </div>
               <div className="p-1 bg-neutral-2 rounded-3xl border border-neutral-3 overflow-hidden">
                  <div className="bg-neutral-0 dark:bg-neutral-2 p-8 flex flex-col items-center gap-4 relative overflow-hidden">
                     <motion.div 
                        initial={{ scale: 1 }}
                        whileTap={{ scale: 0.92 }}
                        className="w-full h-16 bg-neutral-1 rounded-2xl border-2 border-dashed border-neutral-3 flex items-center justify-center text-neutral-4 text-xs font-bold"
                     >
                        到达边缘回弹 (Rubber Band)
                     </motion.div>
                  </div>
               </div>
               <p className="text-xs text-neutral-6 leading-relaxed">通过负空间的拉伸比例反馈界面边界，而非硬性停止。这种“粘性”反馈能优雅地告知用户已到尽头。</p>
            </div>
         </div>
      </div>
    </div>
  );
};

const PrototypeSection = () => (
  <div className="bg-neutral-1 p-8 lg:p-12 rounded-[48px] border border-neutral-3 overflow-hidden">
    <div className="flex flex-col lg:flex-row gap-16 items-center">
       <div className="flex-1 space-y-8">
          <h3 className="text-4xl font-black text-neutral-11 tracking-tighter">业务链路原型</h3>
          <p className="text-neutral-7 font-medium leading-relaxed">通过多端同步的交互原型，验证业务逻辑的闭环性。我们不仅关注静态视觉，更在乎每一帧动效在业务场景中的反馈意义。</p>
          <div className="flex gap-4">
             <div className="px-6 py-4 bg-neutral-0 dark:bg-neutral-2 border border-neutral-3 rounded-2xl flex-1">
                <Smartphone className="text-brand mb-2" size={24} />
                <div className="font-bold text-neutral-11">多端适配</div>
             </div>
             <div className="px-6 py-4 bg-neutral-0 dark:bg-neutral-2 border border-neutral-3 rounded-2xl flex-1">
                <Zap className="text-success mb-2" size={24} />
                <div className="font-bold text-neutral-11">毫秒反馈</div>
             </div>
          </div>
       </div>
       <div className="flex-1 flex justify-center">
          <div className="w-[300px] h-[600px] bg-neutral-11 rounded-[60px] p-4 border-[8px] border-neutral-12 shadow-[0_60px_120px_rgba(0,0,0,0.4)] relative">
             <div className="w-32 h-8 bg-neutral-12 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-3xl z-10" />
             <div className="w-full h-full bg-neutral-0 dark:bg-neutral-2 rounded-[44px] overflow-hidden p-8 flex flex-col justify-center gap-8">
                <div className="w-16 h-16 bg-brand rounded-2xl shadow-xl shadow-brand/20 flex items-center justify-center text-white"><Zap size={32}/></div>
                <div className="space-y-2">
                   <div className="h-6 w-3/4 bg-neutral-11 rounded" />
                   <div className="h-4 w-1/2 bg-neutral-4 rounded" />
                </div>
                <div className="space-y-4">
                   <div className="h-12 w-full bg-neutral-1 border border-neutral-3 rounded-xl" />
                   <div className="h-12 w-full bg-neutral-1 border border-neutral-3 rounded-xl" />
                   <div className="h-12 w-full bg-brand rounded-xl" />
                </div>
             </div>
          </div>
       </div>
    </div>
  </div>
);

// --- Main App Component ---

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('visual');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [globalRadius, setGlobalRadius] = useState(12);
  const [brandColor, setBrandColor] = useState('#347BFF');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [activeTab]);

  useEffect(() => {
    // Initial responsive sidebar state
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    
    handleResize(); // Run once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const adjustColor = (hex: string, amount: number) => {
    try {
      const color = hex.replace(/^#/, '');
      const num = parseInt(color, 16);
      let r = (num >> 16) + amount;
      let g = ((num >> 8) & 0x00FF) + amount;
      let b = (num & 0x0000FF) + amount;
      const clamp = (val: number) => Math.min(255, Math.max(0, val));
      r = clamp(r); g = clamp(g); b = clamp(b);
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    } catch (e) { return hex; }
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--color-brand', brandColor);
    document.documentElement.style.setProperty('--color-info', brandColor);
    document.documentElement.style.setProperty('--color-brand-light', brandColor + '15');
    document.documentElement.style.setProperty('--color-brand-dark', adjustColor(brandColor, -40));
    
    const rgb = hexToRgb(brandColor);
    if (rgb) {
      document.documentElement.style.setProperty('--brand-rgb', `${rgb.r}, ${rgb.g}, ${rgb.b}`);
    }
  }, [brandColor]);

  const tabs: { id: Tab; label: string; icon: any; group: string }[] = [
    { id: 'visual', label: '视觉基础标准', icon: Palette, group: 'FOUNDATION' },
    { id: 'layout', label: '模块布局规范', icon: LayoutIcon, group: 'FOUNDATION' },
    { id: 'lines_shadows', label: '线与投影标准', icon: Layers, group: 'FOUNDATION' },
    { id: 'icons', label: '图标资源库', icon: Smile, group: 'FOUNDATION' },
    { id: 'components', label: '系统核心组件', icon: Box, group: 'COMPONENTS' },
    { id: 'business_components', label: '典型业务组件', icon: Car, group: 'COMPONENTS' },
    { id: 'ai_design', label: '广联AI Design', icon: Sparkles, group: 'COMPONENTS' },
    { id: 'feedback', label: '系统反馈展示', icon: MessageSquare, group: 'COMPONENTS' },
    { id: 'motion', label: '动效体系标准', icon: Zap, group: 'EXPERIENCE' },
    { id: 'prototype', label: '典型业务原型', icon: LayoutIcon, group: 'EXPERIENCE' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'visual':
        return (
          <div className="space-y-16 animate-fade-in max-w-4xl">
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-6 bg-brand rounded-full shadow-[0_0_12px_rgba(var(--brand-rgb),0.4)]" />
                <h2 className="text-2xl font-bold tracking-tight text-neutral-11">色彩系统标准</h2>
              </div>
              <ColorSection brandColor={brandColor} onColorChange={setBrandColor} />
            </section>
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-6 bg-brand rounded-full shadow-[0_0_12px_rgba(var(--brand-rgb),0.4)]" />
                <h2 className="text-2xl font-bold tracking-tight text-neutral-11">字体排版与层级规范</h2>
              </div>
              <TypographySection />
            </section>
          </div>
        );
      case 'layout':
        return (
          <div className="animate-fade-in max-w-4xl">
             <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-6 bg-brand rounded-full shadow-[0_0_12px_rgba(var(--brand-rgb),0.4)]" />
                <h2 className="text-2xl font-bold tracking-tight text-neutral-11">模块布局 (Layout)</h2>
              </div>
             <LayoutSystemPreview />
          </div>
        );
      case 'lines_shadows':
        return (
          <div className="animate-fade-in max-w-4xl space-y-16">
             <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1.5 h-6 bg-brand rounded-full shadow-[0_0_12px_rgba(var(--brand-rgb),0.4)]" />
                  <h2 className="text-2xl font-bold tracking-tight text-neutral-11">投影系统 (Shadow)</h2>
                </div>
                <ShadowSystemPreview />
             </section>
             <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1.5 h-6 bg-brand rounded-full shadow-[0_0_12px_rgba(var(--brand-rgb),0.4)]" />
                  <h2 className="text-2xl font-bold tracking-tight text-neutral-11">线条标准 (Line)</h2>
                </div>
                <LineSystemPreview />
             </section>
          </div>
        );
      case 'icons':
        return (
          <div className="animate-fade-in">
             <div className="items-center gap-3 mb-8 flex">
                <div className="w-1.5 h-6 bg-brand rounded-full shadow-[0_0_12px_rgba(var(--brand-rgb),0.4)]" />
                <h2 className="text-2xl font-bold tracking-tight text-neutral-11">图标资源库</h2>
              </div>
             <IconSection />
          </div>
        );
      case 'components': 
        return (
          <div className="space-y-20 animate-fade-in">
             <ComponentsSection radius={globalRadius} setRadius={setGlobalRadius} />
          </div>
        );
      case 'business_components':
        return (
          <div className="animate-fade-in max-w-4xl">
            <BusinessComponentsPreview />
          </div>
        );
      case 'feedback': 
        return (
          <div className="space-y-24 animate-fade-in">
             <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1.5 h-6 bg-brand rounded-full shadow-[0_0_12px_rgba(var(--brand-rgb),0.4)]" />
                  <h2 className="text-3xl font-black tracking-tighter text-neutral-11 uppercase group">浮层引导 <span className="text-neutral-4 ml-2 opacity-30 group-hover:opacity-100 transition-opacity whitespace-nowrap">Guide System</span></h2>
                </div>
                <p className="text-sm font-medium text-neutral-6 max-w-xl mb-10 pl-5 text-balance">多维新手引导组件。通过 Context Bubble 实现精准的功能描述，利用 Focal Mask 强化视觉锁定。支持全端手势适配与多步引导逻辑，是业务教育的最佳实践。</p>
                <div className="bg-neutral-1 rounded-[48px] p-8 border border-neutral-2 shadow-inner overflow-hidden relative group flex justify-center">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-brand/10 transition-colors" />
                   <GuidePreview />
                </div>
             </section>
             <FeedbackSection />
             <LoadingPreview />
          </div>
        );
      case 'motion': return <MotionSystemSection />;
      case 'ai_design':
        return (
          <div className="animate-fade-in max-w-4xl space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-brand shadow-[0_20px_50px_-12px_rgba(52,123,255,0.4)] rounded-[40px] flex items-center gap-6 border border-white/20"
            >
              <div className="w-16 h-16 rounded-[24px] bg-white/10 backdrop-blur-xl flex items-center justify-center text-white border border-white/20">
                 <Bot size={32} />
              </div>
              <div className="space-y-1">
                 <h4 className="text-xl font-black text-white tracking-tight">AI PM 视角：智能交互规范系统</h4>
                 <p className="text-white/70 text-xs font-bold leading-relaxed max-w-lg">
                    该规范由 AI 产品专家团队主导编撰。核心使命：通过“透明度、容错性与成本感知”三位一体的交互框架，将 AI 的波动潜能转化为业务的确定性胜率。
                 </p>
              </div>
            </motion.div>
            <AIDesignPreview />
          </div>
        );
      case 'prototype':
        return (
          <div className="space-y-16 animate-fade-in">
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-6 bg-brand rounded-full shadow-[0_0_12px_rgba(var(--brand-rgb),0.4)]" />
                <h2 className="text-2xl font-bold text-neutral-11">高保真交互示例</h2>
              </div>
              <PrototypeSection />
            </section>
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-6 bg-brand rounded-full shadow-[0_0_12px_rgba(var(--brand-rgb),0.4)]" />
                <h2 className="text-2xl font-bold text-neutral-11">低保真线框分析 (Lo-fi)</h2>
              </div>
              <LowFiSection />
            </section>
          </div>
        );
      default: return null;
    }
  };

  const currentTab = tabs.find(t => t.id === activeTab);

  return (
    <div className="h-screen bg-neutral-1 flex overflow-hidden selection:bg-brand/10 selection:text-brand">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-neutral-12/60 backdrop-blur-sm z-[90] lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Navigation */}
      <motion.aside 
        initial={false}
        animate={{ 
          width: (sidebarOpen || (window.innerWidth < 1024 && mobileMenuOpen)) ? 280 : 0, 
          x: (sidebarOpen || (window.innerWidth < 1024 && mobileMenuOpen)) ? 0 : -280 
        }}
        className={`fixed lg:relative h-full bg-neutral-1 border-r border-neutral-3 flex flex-col flex-shrink-0 z-[100] shadow-[10px_0_40px_rgba(0,0,0,0.02)] transition-shadow duration-300 ${mobileMenuOpen ? 'shadow-2xl' : ''}`}
      >
        <div className="p-8 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-neutral-11 rounded-xl flex items-center justify-center text-neutral-0 font-bold text-lg shadow-xl shadow-black/10 dark:shadow-brand/20 transition-shadow">G</div>
            <div>
              <h1 className="font-bold text-neutral-11 tracking-tight text-[15px]">G-Design Pro</h1>
              <div className="flex items-center gap-1.5 mt-0.5">
                 <div className="w-1.5 h-1.5 bg-success rounded-full" />
                 <span className="text-[10px] font-bold text-neutral-6 tracking-widest uppercase">Version 1.5.0</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-8 h-8 rounded-lg bg-neutral-1 flex items-center justify-center text-neutral-6 hover:text-brand transition-colors"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-8 overflow-y-auto scrollbar-hide">
          {['FOUNDATION', 'COMPONENTS', 'EXPERIENCE'].map(group => (
            <div key={group} className="space-y-1">
               <h3 className="px-4 text-[10px] font-black text-neutral-6 tracking-[0.2em] mb-2">{group}</h3>
               {tabs.filter(t => t.group === group).map((tab) => (
                 <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as Tab)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 group ${
                      activeTab === tab.id 
                        ? 'bg-neutral-11 text-neutral-0 shadow-xl shadow-black/10' 
                        : 'text-neutral-7 hover:bg-neutral-2 hover:text-neutral-11'
                    }`}
                 >
                    <tab.icon size={18} className={activeTab === tab.id ? 'text-neutral-0' : 'text-neutral-6 group-hover:text-brand transition-colors'} />
                    <span className="text-[14px] font-medium leading-none">{tab.label}</span>
                 </button>
               ))}
            </div>
          ))}
        </nav>

        <div className="p-6 border-t border-neutral-2">
           <div className="p-4 bg-brand/5 rounded-2xl border border-brand/10">
              <p className="text-[11px] text-neutral-7 leading-relaxed font-medium uppercase tracking-tight">Design Experience Group • Apr 2026</p>
           </div>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full relative overflow-hidden bg-neutral-0 transition-colors duration-300">
        {/* Background Decorative Gradients - Subtle depth for dark mode */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-700">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-success/5 blur-[150px] rounded-full" />
        </div>

        {/* Top Header */}
        <header className="h-[72px] bg-neutral-1/80 backdrop-blur-xl border-b border-neutral-2 flex items-center justify-between px-4 lg:px-8 z-40 shrink-0">
          <div className="flex items-center gap-4 lg:gap-6">
             <button 
               onClick={() => {
                 if (window.innerWidth < 1024) {
                   setMobileMenuOpen(!mobileMenuOpen);
                 } else {
                   setSidebarOpen(!sidebarOpen);
                 }
               }}
               className="p-2 -ml-2 text-neutral-7 hover:text-brand hover:bg-brand/5 rounded-lg transition-colors"
             >
                <Menu size={20} />
             </button>
             <div className="flex items-center gap-3 text-[13px] font-bold text-neutral-6">
                <span className="cursor-pointer hover:text-neutral-11 transition-colors tracking-tight hidden sm:inline">G-Design</span>
                <ChevronRight size={14} className="opacity-40 hidden sm:inline" />
                <span className="text-neutral-11 tracking-tight truncate max-w-[120px] sm:max-w-none">{currentTab?.label}</span>
             </div>
          </div>

          <div className="flex items-center gap-2 lg:gap-4">
             <div className="relative group hidden md:block">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-6" />
                <input 
                  type="text" 
                  placeholder="搜索规范..." 
                  className="h-10 w-48 pl-10 pr-4 bg-neutral-2 border border-neutral-3 rounded-full text-xs font-bold outline-none focus:w-64 focus:border-brand transition-all placeholder:text-neutral-6"
                />
             </div>
             <div className="w-px h-6 bg-neutral-3 hidden sm:block" />
             <div className="w-9 h-9 rounded-full overflow-hidden border border-neutral-3 cursor-pointer hover:border-brand transition-colors shrink-0">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100" className="w-full h-full object-cover" />
             </div>
          </div>
        </header>

        {/* Scroll Content Area */}
        <div className="flex-1 overflow-y-auto scroll-smooth animate-fade-in scrollbar-hide">
           <div className="px-6 lg:px-12 py-12 lg:py-16 max-w-[1600px] mx-auto min-h-full">
              <div className="mb-14 lg:mb-20">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="hidden sm:flex items-center">
                       <span className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
                       <div className="w-10 h-px bg-brand/30" />
                    </div>
                    <span className="px-3 py-1 bg-brand-light text-brand text-[10px] lg:text-[11px] font-black uppercase rounded-full tracking-[0.2em]">{currentTab?.group}</span>
                    <span className="text-neutral-3 font-thin">•</span>
                    <span className="text-neutral-6 text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] font-mono">Build v26.04</span>
                 </div>
                 <h1 className="text-4xl lg:text-7xl font-black text-neutral-12 tracking-[-0.04em] mb-6 leading-none group">
                    {currentTab?.label}
                    <span className="inline-block w-3 h-3 bg-brand rounded-full ml-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2" />
                 </h1>

              </div>

              <div className="pb-32">
                 <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3 }}
                    >
                      {renderContent()}
                    </motion.div>
                 </AnimatePresence>
              </div>
           </div>
        </div>

        {/* Scroll Top Button */}
        <div className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 flex flex-col gap-3">
           <button 
             onClick={() => document.querySelector('.overflow-y-auto')?.scrollTo({ top: 0, behavior: 'smooth' })}
             className="w-10 h-10 lg:w-12 lg:h-12 bg-neutral-0 shadow-xl shadow-brand/10 rounded-full border border-neutral-3 flex items-center justify-center text-neutral-8 hover:text-brand transition-colors hover:shadow-brand active:scale-90"
           >
              <ArrowUp size={20} />
           </button>
        </div>
      </div>
    </div>
  );
}

