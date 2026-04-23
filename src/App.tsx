/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ChevronRight, 
  Palette, 
  Type, 
  Box, 
  Layers, 
  Zap, 
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
  Sparkles,
  CheckCircle2,
  Loader2,
  Trash2,
  LogOut,
  Map,
  Calendar,
  Camera,
  Globe,
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
  RefreshCw,
  Mail,
  PhoneCall,
  BellRing,
  Lock,
  Unlock,
  Save,
  CreditCard,
  Briefcase,
  Gift,
  Heart,
  Star,
  ThumbsUp,
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
  HelpCircle,
  AlertCircle,
  AlertTriangle,
  CheckCircle
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
  SwipeCellPreview
} from './InteractivePreviews';

// --- Types ---
type Tab = 'visual' | 'icons' | 'components' | 'input' | 'feedback' | 'motion' | 'prototype';

// --- Design System Sections ---

const ColorSection = () => (
  <div className="space-y-8 animate-slide-up">
    <div>
      <h3 className="text-lg font-semibold mb-4 text-neutral-11">品牌色 Brand</h3>
      <div className="grid grid-cols-2 gap-4">
        {[
          { name: 'Brand Main', hex: '#347BFF', class: 'bg-brand' },
          { name: 'Brand Light', hex: '#E6F0FF', class: 'bg-brand-light' },
          { name: 'Brand Dark', hex: '#1E50CC', class: 'bg-brand-dark' },
        ].map((c) => (
          <div key={c.name} className="p-4 rounded-lg bg-white shadow-sm border border-neutral-3">
            <div className={`h-16 w-full rounded-md mb-2 ${c.class}`} />
            <div className="text-sm font-medium">{c.name}</div>
            <div className="text-xs text-neutral-8">{c.hex}</div>
          </div>
        ))}
      </div>
    </div>
    
    <div>
      <h3 className="text-lg font-semibold mb-4 text-neutral-11">辅助色 Semantic</h3>
      <div className="grid grid-cols-2 gap-4">
        {[
          { name: 'Success', hex: '#35C376', class: 'bg-success' },
          { name: 'Warning', hex: '#FF9D0A', class: 'bg-warning' },
          { name: 'Error', hex: '#F24724', class: 'bg-error' },
          { name: 'Info', hex: '#347BFF', class: 'bg-info' },
        ].map((c) => (
          <div key={c.name} className="p-4 rounded-lg bg-white shadow-sm border border-neutral-3">
            <div className={`h-12 w-full rounded-md mb-2 ${c.class}`} />
            <div className="text-sm font-medium">{c.name}</div>
            <div className="text-xs text-neutral-8">{c.hex}</div>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4 text-neutral-11">中性色 Neutral</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { name: 'Neutral 11', hex: '#333333', class: 'bg-neutral-11' },
          { name: 'Neutral 9', hex: '#666666', class: 'bg-neutral-9' },
          { name: 'Neutral 8', hex: '#999999', class: 'bg-neutral-8' },
          { name: 'Neutral 6', hex: '#CCCCCC', class: 'bg-neutral-6' },
        ].map((c) => (
          <div key={c.name} className="p-3 rounded-lg bg-white shadow-sm border border-neutral-3">
            <div className={`h-10 w-full rounded-md mb-2 ${c.class}`} />
            <div className="text-[10px] uppercase font-bold text-neutral-7">{c.name}</div>
            <div className="text-xs font-medium text-neutral-11">{c.hex}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TypographySection = () => (
  <div className="space-y-8 animate-slide-up">
    <div className="p-6 bg-white rounded-xl border border-neutral-3">
      <div className="space-y-6">
        <div>
          <div className="text-xs text-neutral-7 mb-2 uppercase tracking-widest">H1 / Huge Heading</div>
          <div className="text-3xl font-bold text-neutral-12">广联移动端规范</div>
        </div>
        <div>
          <div className="text-xs text-neutral-7 mb-2 uppercase tracking-widest">H2 / Sub Heading</div>
          <div className="text-xl font-bold text-neutral-11">设计资产与交付标准</div>
        </div>
        <div>
          <div className="text-xs text-neutral-7 mb-2 uppercase tracking-widest">Body / Regular</div>
          <div className="text-base text-neutral-10 leading-relaxed">
            专为广联业务场景打造的多端一致性体验设计规范，旨在提升交付效率与用户体验。
          </div>
        </div>
        <div>
          <div className="text-xs text-neutral-7 mb-2 uppercase tracking-widest">Micro / Details</div>
          <div className="text-xs text-neutral-8 italic">
            * 字体采用 Inter 与 苹方 (PingFang SC) 的组合，保证高清晰度。
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Component Documentation Structure ---

const ComponentPreview = ({ children, title }: { children: React.ReactNode, title?: string }) => (
  <div className="sticky top-12 w-[395px] hidden lg:block select-none">
    {/* External Frame - Adds about 10px on each side */}
    <div className="relative w-[395px] h-[832px] bg-neutral-12 rounded-[55px] p-[10px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-neutral-10/20">
      
      {/* Power Button */}
      <div className="absolute right-[-2px] top-[180px] w-[3px] h-[80px] bg-neutral-11 rounded-l-md" />
      {/* Volume Buttons */}
      <div className="absolute left-[-2px] top-[140px] w-[3px] h-[50px] bg-neutral-11 rounded-r-md" />
      <div className="absolute left-[-2px] top-[200px] w-[3px] h-[50px] bg-neutral-11 rounded-r-md" />

      {/* Screen Area - Exactly 375x812 */}
      <div className="w-[375px] h-[812px] bg-white rounded-[45px] overflow-hidden relative flex flex-col shadow-inner">
        
        {/* Notch / Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-neutral-12 rounded-full z-30 flex items-center justify-center">
            <div className="w-10 h-1 bg-neutral-9/30 rounded-full" />
        </div>

        {/* Status Bar */}
        <div className="h-12 px-8 pt-2 flex items-center justify-between text-[13px] font-bold text-neutral-12 bg-white/80 backdrop-blur-md z-20">
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
        {title && (
          <div className="h-12 px-4 border-b border-neutral-3 flex items-center justify-between bg-white relative z-10">
             <ChevronLeft size={20} className="text-neutral-11" />
             <span className="font-bold text-sm absolute left-1/2 -translate-x-1/2">{title}</span>
             <Menu size={20} className="text-neutral-11" />
          </div>
        )}
        
        {/* Scrollable App Content */}
        <div className="flex-1 overflow-y-auto scrollbar-hide pt-2 pb-12 bg-neutral-2">
          <div className="px-5">
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
);

const ComponentsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('basic');
  const [selectedComp, setSelectedComp] = useState('Button');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: '全部分类', icon: LayoutPanelLeft },
    { id: 'basic', name: '基础组件', icon: Box },
    { id: 'input', name: '数据输入', icon: Edit },
    { id: 'display', name: '展示展示', icon: PanelsTopBottom },
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
              <button className="w-full py-3 bg-brand text-white rounded-lg font-medium text-sm active:scale-[0.98] transition-transform shadow-md shadow-brand/20">填充按钮</button>
              <button className="w-full py-3 bg-brand-light text-brand rounded-lg font-medium text-sm active:bg-brand/10 transition-colors">轻量按钮</button>
              <button className="w-full py-3 border border-neutral-4 text-neutral-10 rounded-lg font-medium text-sm active:bg-neutral-2">描边按钮</button>
              <button className="w-full py-3 text-brand font-medium text-sm active:opacity-60">文字按钮</button>
           </div>
           <div className="space-y-3">
              <h4 className="text-[14px] font-bold text-neutral-12 mb-4">02 禁用状态</h4>
              <button className="w-full py-3 bg-neutral-3 text-neutral-7 rounded-lg font-medium text-sm cursor-not-allowed">禁用按钮</button>
           </div>
           <div className="space-y-3">
              <h4 className="text-[14px] font-bold text-neutral-12 mb-4">03 图标按钮</h4>
              <button className="w-full py-3 bg-brand text-white rounded-lg font-medium text-sm flex items-center justify-center gap-2 active:scale-[0.98]">
                <Zap size={16} className="fill-white" />
                填充按钮
              </button>
           </div>
        </div>
      )
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
      preview: (
        <div className="space-y-10">
           <div className="space-y-4">
              <h4 className="text-[12px] text-neutral-8 font-bold uppercase tracking-wider">主次按钮组合</h4>
              <div className="flex gap-3">
                 <button className="flex-1 py-3 bg-neutral-3 text-neutral-11 rounded-lg font-bold text-sm">取消</button>
                 <button className="flex-2 py-3 bg-brand text-white rounded-lg font-bold text-sm shadow-lg shadow-brand/20">提交申请</button>
              </div>
           </div>
           
           <div className="space-y-4">
              <h4 className="text-[12px] text-neutral-8 font-bold uppercase tracking-wider">文字按钮组</h4>
              <div className="flex justify-around bg-white p-3 rounded-xl shadow-sm border border-neutral-3">
                 <button className="text-xs text-brand font-bold px-4 py-1 border-r border-neutral-3 flex-1 text-center">点赞</button>
                 <button className="text-xs text-neutral-11 font-bold px-4 py-1 border-r border-neutral-3 flex-1 text-center">分享</button>
                 <button className="text-xs text-neutral-11 font-bold px-4 py-1 flex-1 text-center">评论</button>
              </div>
           </div>

           <div className="flex flex-col gap-3">
              <button className="w-full py-3 bg-brand text-white rounded-lg font-bold text-sm">主要操作</button>
              <button className="w-full py-3 bg-brand-light text-brand rounded-lg font-bold text-sm">次要操作</button>
           </div>
        </div>
      )
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
      preview: (
        <div className="space-y-8">
           <div className="flex flex-wrap gap-3">
              <div className="px-3 py-1 bg-brand-light text-brand text-xs font-medium rounded-md">稳定版</div>
              <div className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-md">已完成</div>
              <div className="px-3 py-1 bg-warning/10 text-warning text-xs font-medium rounded-md">待处理</div>
              <div className="px-3 py-1 bg-error/10 text-error text-xs font-medium rounded-md">已关闭</div>
           </div>
           
           <div className="flex flex-wrap gap-3">
              <div className="px-3 py-1 border border-brand text-brand text-xs font-medium rounded-full">进行中</div>
              <div className="px-3 py-1 border border-neutral-4 text-neutral-8 text-xs font-medium rounded-full">历史记录</div>
           </div>

           <div className="flex flex-wrap gap-3">
              <div className="px-3 py-1 bg-neutral-2 text-neutral-11 text-xs font-medium rounded-md flex items-center gap-1.5 shadow-sm border border-neutral-3">
                 设计规范
                 <X size={12} className="text-neutral-6" />
              </div>
              <div className="px-3 py-1 bg-neutral-2 text-neutral-11 text-xs font-medium rounded-md flex items-center gap-1.5 shadow-sm border border-neutral-3">
                 工业互联网
                 <X size={12} className="text-neutral-6" />
              </div>
           </div>
        </div>
      )
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
    Fab: {
      category: 'basic',
      name: 'Fab 悬浮按钮',
      desc: '当功能使用图标即可表意清楚时，可使用纯图标悬浮按钮。',
      usage: {
        scenarios: '页面最核心的快速入口，如“首页添加按钮”、“客服入口”、“发布动态”。',
        prohibitions: '避免放置过多悬浮按钮，以免遮挡页面内容或造成视觉混乱。',
        common: '单图标悬浮、复合功能悬浮。',
        similar: 'Button 按钮：常规布局按钮。'
      },
      preview: (
        <div className="relative h-full bg-neutral-1 overflow-hidden -mx-5 px-5">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-20 flex flex-col items-center">
              <div className="w-14 h-14 bg-brand rounded-full shadow-[0_12px_24px_rgba(52,123,255,0.4)] flex items-center justify-center text-white active:scale-90 transition-transform">
                 <Plus size={32} strokeWidth={3} />
              </div>
              
              <div className="flex flex-col items-end gap-4 w-full">
                 <div className="bg-white p-3 rounded-full shadow-lg border border-neutral-3 text-neutral-10 active:scale-95 transition-all">
                    <MessageSquare size={20} />
                 </div>
                 <div className="w-14 h-14 bg-neutral-12 rounded-full shadow-xl flex items-center justify-center text-white active:scale-95 transition-all">
                    <LayoutIcon size={24} />
                 </div>
              </div>
           </div>
           
           <div className="absolute bottom-10 right-8 space-y-4 flex flex-col items-center">
              <div className="text-[10px] bg-neutral-12 text-white px-2 py-1 rounded shadow-sm">回到顶部</div>
              <div className="w-12 h-12 bg-white rounded-full shadow-lg border border-neutral-3 flex items-center justify-center text-neutral-11">
                 <Plus className="rotate-45" />
              </div>
           </div>
        </div>
      )
    },
    Drawer: {
      category: 'nav',
      name: 'Drawer 抽屉',
      desc: '用作一组平行关系页面/内容的切换器，同屏可展示更多的选项数量。',
      usage: {
        scenarios: '功能菜单导航、筛选条件选择、详情内容的快速查阅。',
        prohibitions: '抽屉层级不宜过深，一般不超过两层嵌套。',
        common: '左侧导航抽屉、底部筛选抽屉。',
        similar: 'ActionSheet 动作面板；SideBar 侧边栏。'
      },
      preview: (
        <div className="relative h-full bg-neutral-8/20 -mx-5 overflow-hidden">
           {/* Backdrop Overlay */}
           <div className="absolute inset-0 bg-black/30 z-0" />
           
           {/* Left Drawer Content */}
           <div className="absolute left-0 top-0 bottom-0 w-[80%] bg-white shadow-2xl z-10 flex flex-col pt-12 animate-slide-left">
              <div className="px-6 mb-8">
                 <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand mb-4">
                    <User size={32} />
                 </div>
                 <h3 className="text-xl font-bold">游客用户</h3>
                 <p className="text-xs text-neutral-8">g-link_visitor_2024</p>
              </div>
              
              <div className="flex-1 overflow-y-auto px-4 divide-y divide-neutral-2">
                 <div className="py-4 space-y-1">
                    {[
                      { icon: Home, label: '概览看板', active: true },
                      { icon: LayoutIcon, label: '我的项目', active: false },
                      { icon: MessageSquare, label: '消息通知', active: false },
                      { icon: ShieldCheck, label: '安全审计', active: false },
                    ].map(item => (
                       <div key={item.label} className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-colors ${item.active ? 'bg-brand/10 text-brand' : 'text-neutral-11 active:bg-neutral-2'}`}>
                          <item.icon size={20} />
                          <span className="text-sm font-bold">{item.label}</span>
                       </div>
                    ))}
                 </div>
                 <div className="py-4">
                    <div className="flex items-center gap-4 px-4 py-3 text-neutral-9 active:bg-neutral-2 rounded-xl transition-colors">
                       <Settings size={20} />
                       <span className="text-sm font-bold">设置与关于</span>
                    </div>
                 </div>
              </div>
              
              <div className="p-6 border-t border-neutral-3">
                 <button className="w-full py-4 bg-error text-white rounded-xl font-bold text-sm shadow-lg shadow-error/20">退出登录</button>
              </div>
           </div>
        </div>
      )
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
           <div className="bg-white shadow-sm ring-1 ring-neutral-3 rounded-lg overflow-hidden">
              <div className="h-11 px-4 flex items-center justify-between">
                 <ChevronLeft size={20} className="text-neutral-11" />
                 <span className="text-[15px] font-bold">页面标题</span>
                 <X size={20} className="text-neutral-11" />
              </div>
           </div>
           
           <div className="bg-brand text-white shadow-lg rounded-lg overflow-hidden">
              <div className="h-11 px-4 flex items-center justify-between">
                 <ChevronLeft size={20} />
                 <span className="text-[15px] font-bold">项目详情</span>
                 <div className="flex gap-4">
                    <Search size={18} />
                    <MoreHorizontal size={18} />
                 </div>
              </div>
           </div>

           <div className="bg-white ring-1 ring-neutral-3 rounded-lg overflow-hidden">
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
      preview: (
        <div className="space-y-12 h-full bg-neutral-2 -mx-5 px-5 py-10">
           <div className="bg-white border-t border-neutral-3 rounded-xl shadow-2xl overflow-hidden">
              <div className="flex items-center h-16">
                 {[
                   { icon: Home, label: '首页', active: true },
                   { icon: LayoutIcon, label: '发现', active: false },
                   { icon: MessageSquare, label: '消息', active: false },
                   { icon: User, label: '我的', active: false },
                 ].map(item => (
                    <div key={item.label} className="flex-1 flex flex-col items-center gap-1 group active:opacity-60 transition-opacity">
                       <item.icon size={20} className={item.active ? 'text-brand' : 'text-neutral-7'} />
                       <span className={`text-[10px] font-bold ${item.active ? 'text-brand' : 'text-neutral-8'}`}>{item.label}</span>
                    </div>
                 ))}
              </div>
           </div>

           <div className="bg-white border-t border-neutral-3 rounded-xl shadow-2xl overflow-hidden relative pt-2">
              <div className="flex items-center h-16 divide-x divide-neutral-2">
                 <div className="flex-1 flex flex-col items-center justify-center gap-1 opacity-40">
                    <Home size={20} />
                 </div>
                 <div className="flex-1 flex flex-col items-center justify-center gap-1">
                    <div className="w-12 h-12 bg-brand rounded-full -mt-10 shadow-[0_8px_20px_rgba(52,123,255,0.4)] flex items-center justify-center text-white active:scale-90 transition-transform">
                       <Plus size={24} strokeWidth={3} />
                    </div>
                 </div>
                 <div className="flex-1 flex flex-col items-center justify-center gap-1 opacity-40">
                    <User size={20} />
                 </div>
              </div>
           </div>
        </div>
      )
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
      preview: (
        <div className="space-y-12 py-10">
           <div className="bg-white border-b border-neutral-3">
              <div className="flex px-4 overflow-x-auto scrollbar-hide">
                 {['精彩推荐', '工业互联', '数字化转型', '智造未来'].map((item, idx) => (
                    <div key={item} className="flex-shrink-0 px-4 py-4 flex flex-col items-center gap-2 relative">
                       <span className={`text-[15px] font-bold ${idx === 0 ? 'text-brand' : 'text-neutral-9'}`}>{item}</span>
                       {idx === 0 && <div className="absolute bottom-0 w-8 h-[3px] bg-brand rounded-full" />}
                    </div>
                 ))}
              </div>
           </div>

           <div className="px-6 flex gap-3 overflow-x-auto scrollbar-hide py-2">
              {['全部', '待评价', '退款/售后', '已签收'].map((item, idx) => (
                 <div key={item} className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border whitespace-nowrap ${idx === 0 ? 'bg-neutral-12 text-white border-neutral-12' : 'bg-white border-neutral-2 text-neutral-8 shadow-sm'}`}>
                    {item}
                 </div>
              ))}
           </div>

           <div className="px-6">
              <div className="flex bg-neutral-1 p-1 rounded-full border border-neutral-2 shadow-inner">
                 <div className="flex-1 py-1.5 bg-white rounded-full text-center text-xs font-extrabold shadow-sm text-neutral-12 border border-neutral-1">账户登录</div>
                 <div className="flex-1 py-1.5 text-center text-xs font-bold text-neutral-8">免密登录</div>
              </div>
           </div>
        </div>
      )
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
      preview: (
        <div className="flex h-full bg-neutral-2 -mx-5 overflow-hidden">
           <div className="w-24 bg-white border-r border-neutral-3 flex flex-col">
              {[
                { label: '基础类', active: true },
                { label: '导航类', active: false },
                { label: '输入类', active: false },
                { label: '展示类', active: false },
                { label: '反馈类', active: false },
              ].map((item, idx) => (
                <div key={item.label} className={`relative py-5 text-center text-[13px] font-bold transition-all ${item.active ? 'text-brand bg-neutral-1' : 'text-neutral-8 active:bg-neutral-2'}`}>
                   {item.active && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-brand rounded-r-full" />}
                   {item.label}
                </div>
              ))}
           </div>
           <div className="flex-1 p-4">
              <div className="h-full border-2 border-dashed border-neutral-4 rounded-xl flex items-center justify-center text-xs text-neutral-6 italic">
                 内容展示区
              </div>
           </div>
        </div>
      )
    },
    Loading: {
      category: 'feedback',
      name: 'Loading 加载',
      desc: '用于表示正在加载中或执行中的状态。',
      usage: {
        scenarios: '数据异步加载、提交表单后的等待、长任务处理。',
        prohibitions: '避免全屏加载时间过长，若任务超过10秒应提供进度条。',
        common: '圆环加载、带文字加载、渐入渐出加载。',
        similar: 'Skeleton 骨架屏：结构占位加载。'
      },
      preview: <LoadingPreview />
    },
    Popup: {
      category: 'feedback',
      name: 'Popup 弹出层',
      desc: '由中心或边缘弹出的浮层，用于承载临时内容。',
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
    <div className="flex flex-col lg:flex-row gap-8 xl:gap-16 items-start">
      {/* Left Column: Navigator & Info */}
      <div className="flex-1 min-w-0 space-y-12">
        <div className="space-y-6">
           <div className="flex flex-col sm:flex-row gap-4">
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
                         ? 'bg-white text-neutral-11 shadow-sm' 
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
                   className="w-full h-9 pl-10 pr-4 bg-neutral-3 border-transparent border rounded-xl text-xs transition-all focus:bg-white focus:border-brand/30 outline-none placeholder:text-neutral-6"
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                 />
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
                      ? 'bg-neutral-11 border-neutral-11 text-white shadow-xl translate-y-[-2px]' 
                      : 'bg-white border-neutral-3 text-neutral-9 hover:border-brand/30 hover:shadow-md'}
                  `}
                >
                  <div className={`text-[10px] font-bold mb-1 opacity-60 uppercase tracking-tighter ${selectedComp === key ? 'text-white' : 'text-neutral-6'}`}>
                     {componentData[key].category}
                  </div>
                  <div className="text-[13px] font-extrabold truncate tracking-tight">
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
                <div className="p-8 bg-white border border-neutral-3 rounded-2xl shadow-sm space-y-6 relative overflow-hidden">
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
                  <pre className="text-neutral-5 leading-relaxed">
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
      <div className="sticky top-24 shrink-0 hidden lg:block select-none z-0">
        <ComponentPreview title={current?.name || selectedComp}>
          {current ? current.preview : (
            <div className="flex items-center justify-center h-full text-neutral-6 italic text-sm font-medium">预览载入中...</div>
          )}
        </ComponentPreview>
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
    { id: 'Loading', name: 'Loading 加载', icon: Loader2, desc: '状态反馈，缓解等待焦虑' },
    { id: 'DropdownMenu', name: 'Dropdown 下拉菜单', icon: ChevronDown, desc: '局部过滤，高效内容筛选' },
  ];
  
  return (
    <div className="flex flex-col lg:flex-row gap-12 items-start animate-fade-in">
      <div className="flex-1 space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {feedbackItems.map(item => (
            <button 
              key={item.id}
              onClick={() => setSelectedFeed(item.id)}
              className={`
                p-6 rounded-2xl border text-left transition-all group relative overflow-hidden
                ${selectedFeed === item.id 
                  ? 'bg-neutral-11 border-neutral-11 text-white shadow-2xl translate-y-[-2px]' 
                  : 'bg-white border-neutral-3 text-neutral-9 hover:border-brand/40 hover:shadow-lg'}
              `}
            >
              <div className="flex items-center gap-4 relative z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors shadow-sm
                  ${selectedFeed === item.id ? 'bg-white/10 text-white' : 'bg-brand-light text-brand group-hover:bg-brand group-hover:text-white'}`}>
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

        <div className="p-8 bg-neutral-3 border border-neutral-4 rounded-3xl space-y-4">
           <h4 className="text-xs font-extrabold text-neutral-6 uppercase tracking-widest flex items-center gap-2">
              <Info size={14} /> Interaction Principle
           </h4>
           <p className="text-sm text-neutral-8 leading-loose font-medium">
             反馈组件应遵循「恰如其分」的原则。非核心路径使用 Toast 或 Message；涉及资产安全或不可逆操作时，必须使用 Dialog 强引导。Popup 作为万能容器，仅在无法通过局部更新解决交互时使用。
           </p>
        </div>
      </div>

      {/* Simulator View */}
      <div className="sticky top-24 shrink-0 hidden lg:block">
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
  );
};


const IconSection = () => {
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
    { icon: Wand2, name: '魔法', id: 'magic' },
    { icon: Bot, name: '助手', id: 'bot' },
    { icon: Zap, name: '能量', id: 'zap' },
    { icon: Star, name: '优质', id: 'star' },
    { icon: Cpu, name: '计算', id: 'cpu' },
    { icon: Atom, name: '核心', id: 'atom' },
  ];

  const posOptions = [
    { id: 'tr', name: '右上' },
    { id: 'br', name: '右下' },
    { id: 'tl', name: '左上' },
    { id: 'bl', name: '左下' },
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

  const IconRenderer = ({ icon: Icon, size, strokeWidth, color, fill, decoColor, showDeco, decoType, decoPos, id, className }: any) => {
    const DecoIcon = decoOptions.find(d => d.id === decoType)?.icon || Sparkles;
    
    const getPosTransform = (pos: string) => {
      switch(pos) {
        case 'tr': return "translate(15, -3) scale(0.45)";
        case 'br': return "translate(15, 15) scale(0.45)";
        case 'tl': return "translate(-3, -3) scale(0.45)";
        case 'bl': return "translate(-3, 15) scale(0.45)";
        default: return "translate(15, -3) scale(0.45)";
      }
    };

    return (
      <svg 
        id={id}
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} overflow-visible`}
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
      </svg>
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
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-6 bg-white rounded-3xl border border-neutral-3 shadow-sm shadow-black/5">
         <div className="flex flex-wrap gap-1 p-1 bg-neutral-3 rounded-xl">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap
                  ${activeCategory === cat.id 
                    ? 'bg-neutral-11 text-white shadow-lg' 
                    : 'text-neutral-7 hover:text-neutral-10'}`}
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
              className="w-full pl-11 pr-4 py-3 bg-neutral-3 border-transparent border rounded-xl text-xs outline-none focus:bg-white focus:border-brand/30 transition-all font-medium"
            />
         </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Configuration Panel */}
        <div className="w-full lg:w-80 shrink-0 space-y-10 animate-fade-in lg:sticky lg:top-24">
           {/* Icon Type Section */}
           <div className="space-y-4">
              <label className="text-[14px] font-bold text-neutral-11">Icon 类型</label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-neutral-2 border border-neutral-3 rounded-xl">
                 <button 
                   onClick={() => setIconType('outline')}
                   className={`py-2 text-[12px] font-bold rounded-lg transition-all ${iconType === 'outline' ? 'bg-white shadow-sm text-neutral-12' : 'text-neutral-5 hover:text-neutral-8'}`}
                 >描边</button>
                 <button 
                   onClick={() => setIconType('filled')}
                   className={`py-2 text-[12px] font-bold rounded-lg transition-all ${iconType === 'filled' ? 'bg-white shadow-sm text-neutral-12' : 'text-neutral-5 hover:text-neutral-8'}`}
                 >描边-填充</button>
              </div>
           </div>

           {/* Icon Color Section */}
           <div className="space-y-4">
              <label className="text-[14px] font-bold text-neutral-11">图标颜色</label>
              <div className="grid grid-cols-2 gap-2 p-1 bg-neutral-2 border border-neutral-3 rounded-xl">
                 <button 
                   onClick={() => setColorMode('single')}
                   className={`py-2 text-[12px] font-bold rounded-lg transition-all ${colorMode === 'single' ? 'bg-white shadow-sm text-neutral-12' : 'text-neutral-5 hover:text-neutral-8'}`}
                 >单色</button>
                 <button 
                   onClick={() => setColorMode('double')}
                   className={`py-2 text-[12px] font-bold rounded-lg transition-all ${colorMode === 'double' ? 'bg-white shadow-sm text-neutral-12' : 'text-neutral-5 hover:text-neutral-8'}`}
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
                        <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${showDeco ? 'left-4.5' : 'left-0.5'}`} />
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
                          <label className="text-[11px] font-bold text-neutral-5 uppercase">修饰类型</label>
                          <div className="flex flex-wrap gap-1.5">
                             {decoOptions.map(opt => (
                               <button 
                                 key={opt.id}
                                 onClick={() => setDecoType(opt.id)}
                                 className={`p-2 rounded-lg transition-all ${decoType === opt.id ? 'bg-brand text-white shadow-md' : 'bg-white border border-neutral-3 text-neutral-6 hover:text-neutral-11'}`}
                                 title={opt.name}
                               >
                                 <opt.icon size={14} />
                               </button>
                             ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[11px] font-bold text-neutral-5 uppercase">修饰位置</label>
                          <div className="grid grid-cols-4 gap-1 p-1 bg-neutral-2 border border-neutral-3 rounded-lg">
                             {posOptions.map(opt => (
                               <button 
                                 key={opt.id}
                                 onClick={() => setDecoPos(opt.id)}
                                 className={`py-1.5 text-[10px] font-bold rounded-md transition-all ${decoPos === opt.id ? 'bg-white shadow-sm text-neutral-12 border border-neutral-3' : 'text-neutral-5 hover:text-neutral-8'}`}
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

           {/* Stroke Width Custom */}
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

           {/* Reset Button */}
           <button 
             onClick={handleReset}
             className="w-full py-3 bg-neutral-1 text-neutral-7 border border-neutral-3 rounded-xl font-bold text-sm hover:bg-neutral-2 hover:text-neutral-12 transition-all active:scale-95"
           >
             重置
           </button>
        </div>

        {/* Icon Grid */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
           {filteredIcons.map((item, idx) => (
             <motion.button
               key={item.name}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.02 }}
               whileHover={{ y: -4, scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
               className="group relative p-8 bg-white border border-neutral-3 rounded-2xl flex flex-col items-center justify-center gap-6 transition-all hover:border-brand/30 hover:shadow-2xl hover:shadow-brand/5"
             >
                <div className="relative">
                   <IconRenderer 
                     icon={item.icon}
                     size={32}
                     strokeWidth={lineWidth}
                     color={color1}
                     fill={getFillColor()}
                     decoColor={colorMode === 'double' ? color2 : color1}
                     showDeco={showDeco}
                     decoType={decoType}
                     decoPos={decoPos}
                     className="transition-all duration-300"
                   />
                   <div className="absolute inset-0 bg-brand/5 blur-xl group-hover:bg-brand/20 transition-all rounded-full" />
                </div>
                <div>
                   <div className="text-[13px] font-extrabold text-neutral-12 group-hover:text-brand transition-colors text-center">{item.name}</div>
                   <div className="text-[10px] text-neutral-6 uppercase tracking-tighter text-center mt-1 font-bold">{item.category}</div>
                </div>

                 {/* Quick Actions Tooltip (Mobile / Hover) */}
                 <div className="absolute inset-0 bg-brand/95 opacity-0 group-hover:opacity-100 backdrop-blur-md transition-all duration-300 flex flex-col items-center justify-center p-4 gap-4 rounded-2xl cursor-default translate-y-4 group-hover:translate-y-0">
                    <div className="flex gap-2">
                       <button 
                         onClick={(e) => {
                           e.stopPropagation();
                           setSelectedIcon(item);
                         }}
                         className="w-10 h-10 bg-white/20 hover:bg-white/40 text-white rounded-xl flex items-center justify-center transition-all hover:scale-110 active:scale-90"
                         title="查看详情与下载"
                       >
                          <Maximize2 size={18} />
                       </button>
                       <button 
                         onClick={(e) => {
                           e.stopPropagation();
                           // We need to render the SVG briefly or use a hidden preview for quick copy
                           // For now, let's just use the drawer for the full logic, 
                           // but we can trigger a "quick copy success" state here.
                           setSelectedIcon(item);
                           setTimeout(() => copyCode(item.name), 100);
                         }}
                         className="w-10 h-10 bg-white/20 hover:bg-white/40 text-white rounded-xl flex items-center justify-center transition-all hover:scale-110 active:scale-90"
                         title="快速复制 SVG"
                       >
                          <Copy size={18} />
                       </button>
                    </div>
                    <span className="text-[10px] font-bold text-white tracking-widest uppercase opacity-80">Quick Actions</span>
                 </div>
             </motion.button>
           ))}
        </div>
      </div>

      {/* Detail Drawer */}
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
              initial={{ x: '100%', opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0.5 }}
              transition={{ type: 'spring', damping: 28, stiffness: 240 }}
              className="relative bg-white w-[420px] h-full shadow-2xl flex flex-col border-l border-neutral-3 z-10"
            >
              <div className="flex-1 overflow-y-auto flex flex-col">
                {/* Preview Area */}
                <div className="bg-neutral-1 flex items-center justify-center relative min-h-[400px] border-b border-neutral-2">
                  <button 
                    onClick={() => setSelectedIcon(null)}
                    className="absolute top-6 left-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-neutral-8 hover:text-neutral-12 hover:scale-110 active:scale-95 transition-all z-20"
                  >
                    <X size={20} />
                  </button>

                  <div className="p-10 bg-white rounded-[40px] shadow-2xl border border-neutral-3 flex items-center justify-center overflow-hidden">
                    <IconRenderer 
                      id="preview-svg"
                      icon={selectedIcon.icon}
                      size={200}
                      strokeWidth={lineWidth}
                      color={color1}
                      fill={getFillColor()}
                      decoColor={colorMode === 'double' ? color2 : color1}
                      showDeco={showDeco}
                      decoType={decoType}
                      decoPos={decoPos}
                      className="drop-shadow-xl"
                    />
                  </div>
                </div>

                {/* Info & Actions */}
                <div className="p-8 space-y-10">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-4xl font-black text-neutral-12 tracking-tight">{selectedIcon.name}</h4>
                      <p className="text-xs text-neutral-6 font-bold uppercase tracking-widest mt-1 opacity-60">Category: {selectedIcon.category}</p>
                    </div>
                    
                    <div className="space-y-3 pt-2">
                       <label className="text-[11px] font-black text-neutral-4 uppercase tracking-[0.2em]">导出预览尺寸 (仅影响 PNG 预览效果)</label>
                       <div className="relative">
                          <select 
                            value={previewSize}
                            onChange={(e) => setPreviewSize(parseInt(e.target.value))}
                            className="w-full bg-neutral-1 border border-neutral-3 rounded-xl px-4 py-3 text-sm outline-none appearance-none font-bold text-neutral-11 cursor-pointer hover:bg-neutral-2 transition-all focus:border-brand"
                          >
                             {[32, 64, 128, 256, 512, 1024].map(s => (
                               <option key={s} value={s}>{s} px</option>
                             ))}
                          </select>
                          <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-6" />
                       </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <button 
                        onClick={() => downloadFile('svg', selectedIcon.name)}
                        className="flex-1 py-4 bg-brand text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-brand-hover transition-all active:scale-95 shadow-lg shadow-brand/20"
                      >
                        <Download size={18} />
                        下载 SVG
                      </button>
                      <button 
                        onClick={() => downloadFile('png', selectedIcon.name)}
                        className="flex-1 py-4 bg-black text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-neutral-8 transition-all active:scale-95 shadow-lg shadow-black/10"
                      >
                        <ImageIcon size={18} />
                        下载 PNG
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button 
                        onClick={() => copyCode(selectedIcon.name)}
                        className="flex-1 py-4 bg-brand/5 text-brand border border-brand/20 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-brand/10 transition-all active:scale-95"
                      >
                        {copySuccess === selectedIcon.name ? <Check size={18} /> : <Copy size={18} />}
                        {copySuccess === selectedIcon.name ? '代码已复制' : '复制 SVG 代码'}
                      </button>
                      <button 
                        onClick={() => copyReactCode(selectedIcon)}
                        className="flex-1 py-4 bg-purple-50 text-purple-600 border border-purple-200 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-purple-100 transition-all active:scale-95"
                      >
                        {copySuccess === selectedIcon.name + '-react' ? <Check size={18} /> : <Zap size={18} />}
                        {copySuccess === selectedIcon.name + '-react' ? '组件已复制' : '复制 React 代码'}
                      </button>
                    </div>
                  </div>

                  {/* Settings Help */}
                  <div className="p-5 bg-neutral-1 rounded-2xl border border-neutral-3">
                    <p className="text-[11px] text-neutral-6 leading-relaxed font-medium">提示：下载和复制的内容将完全继承当前左侧面板中配置的“线条粗细”、“类型”及“颜色”属性。</p>
                  </div>
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
    <div className="bg-white p-6 rounded-xl border border-neutral-3">
      <h3 className="font-bold mb-4 text-neutral-11 text-sm uppercase tracking-widest">Lo-fi Wireframe: Dashboard</h3>
      <div className="aspect-[9/16] bg-white border-2 border-dashed border-neutral-4 rounded-2xl relative p-4 flex flex-col gap-4">
        {/* Header Placeholder */}
        <div className="h-10 border border-neutral-3 rounded bg-neutral-2 flex items-center justify-center">
          <div className="w-20 h-2 bg-neutral-4 rounded" />
        </div>
        
        {/* Banner Placeholder */}
        <div className="h-32 border border-neutral-3 rounded bg-neutral-1 flex items-center justify-center">
            <div className="w-12 h-12 border border-neutral-4 rotate-45" />
        </div>

        {/* Grid Placeholder */}
        <div className="grid grid-cols-4 gap-4">
          {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} className="flex flex-col gap-2 items-center">
              <div className="w-10 h-10 rounded bg-neutral-2 border border-neutral-3" />
              <div className="w-8 h-1.5 bg-neutral-3 rounded" />
            </div>
          ))}
        </div>

        {/* List Placeholder */}
        <div className="flex-1 space-y-3 pt-4">
          {[1,2,3].map(i => (
            <div key={i} className="h-16 border border-neutral-3 rounded bg-neutral-1 p-3 flex gap-3 items-center">
               <div className="w-10 h-10 border border-neutral-3 bg-neutral-2 rounded-lg" />
               <div className="flex-1 space-y-2">
                 <div className="w-24 h-2 bg-neutral-4 rounded" />
                 <div className="w-16 h-1.5 bg-neutral-3 rounded" />
               </div>
            </div>
          ))}
        </div>

        {/* Tabbar Placeholder */}
        <div className="h-14 border border-neutral-3 rounded bg-neutral-2 flex justify-around items-center">
           {[1,2,3,4].map(i => <div key={i} className="w-6 h-6 border border-neutral-4 rounded-sm" />)}
        </div>
      </div>
    </div>
  </div>
);

const MotionStage = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <div className="space-y-8 animate-slide-up">
      <div className="bg-white p-6 rounded-xl border border-neutral-3">
        <h3 className="font-bold mb-6 text-sm uppercase tracking-widest">动效实时演示 Interactive Motion</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
             <div className="text-xs text-neutral-7 mb-3 font-bold uppercase tracking-wider">01. Standard Fade & Slide</div>
             <div className="h-40 bg-neutral-2 rounded-lg relative overflow-hidden p-6 flex items-center justify-center border border-neutral-3">
                <AnimatePresence mode="wait">
                  {toggle ? (
                    <motion.div 
                      key="a"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.2 }}
                      className="w-16 h-16 bg-brand rounded-2xl shadow-xl flex items-center justify-center"
                    >
                      <Zap className="text-white" />
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="b"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="w-16 h-16 bg-success rounded-2xl shadow-xl flex items-center justify-center"
                    >
                      <CircleCheck className="text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
          </div>

          <div>
             <div className="text-xs text-neutral-7 mb-3 font-bold uppercase tracking-wider">02. Micro-Interaction</div>
             <div className="h-40 bg-neutral-2 rounded-lg relative overflow-hidden p-6 flex flex-col items-center justify-center border border-neutral-3 gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white border border-neutral-4 rounded-full text-sm font-bold shadow-sm"
                >
                   Hover & Press Me
                </motion.button>
                <div className="flex gap-4">
                   <motion.div 
                    animate={{ rotate: toggle ? 180 : 0 }}
                    className="p-3 bg-brand-light rounded-xl text-brand"
                   >
                     <Menu size={20} />
                   </motion.div>
                </div>
             </div>
          </div>
        </div>

        <button 
          onClick={() => setToggle(!toggle)}
          className="w-full mt-8 py-3 bg-neutral-11 text-white rounded-lg font-bold text-sm hover:bg-neutral-12 transition-colors flex items-center justify-center gap-2"
        >
          <Zap size={16} className={toggle ? 'fill-current' : ''} />
          触发阶段切换
        </button>
      </div>
    </div>
  );
};

const PrototypeSection = () => (
  <div className="space-y-6 animate-slide-up">
    <div className="bg-white p-6 rounded-xl border border-neutral-3">
      <h3 className="font-bold mb-4 text-neutral-11">Hi-fi Mockup: Login Flow</h3>
      <div className="aspect-[9/16] bg-neutral-2 border border-neutral-3 rounded-2xl overflow-hidden relative shadow-inner">
        {/* Mock Status Bar */}
        <div className="h-10 px-6 flex items-center justify-between text-[10px] font-bold text-neutral-8">
          <span>9:41</span>
          <div className="flex gap-1.5 items-center">
            <div className="w-3 h-3 border-2 border-neutral-7 rounded-sm" />
            <div className="w-1.5 h-1 bg-neutral-7 rounded-full" />
          </div>
        </div>
        
        {/* Mock Content */}
        <div className="p-8">
          <div className="w-12 h-12 bg-brand rounded-xl mb-8 flex items-center justify-center shadow-lg">
            <Zap className="text-white fill-white" size={24} />
          </div>
          <h4 className="text-2xl font-bold text-neutral-12 mb-2">欢迎回来</h4>
          <p className="text-sm text-neutral-8 mb-10">广联，连接一切可能</p>
          
          <div className="space-y-4">
            <div className="h-12 bg-white rounded-lg border border-neutral-4 px-4 flex items-center">
              <span className="text-xs text-neutral-6">手机号</span>
            </div>
            <div className="h-12 bg-white rounded-lg border border-neutral-4 px-4 flex items-center">
              <span className="text-xs text-neutral-6">验证码</span>
            </div>
            <button className="w-full h-12 bg-brand text-white rounded-lg font-bold text-sm shadow-md mt-4">
              立即登录
            </button>
          </div>
          
          <div className="mt-8 flex justify-center items-center gap-4 text-xs text-neutral-7">
            <span className="h-px bg-neutral-4 flex-1"></span>
            <span>其他方式</span>
            <span className="h-px bg-neutral-4 flex-1"></span>
          </div>
          
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="aspect-square bg-white border border-neutral-4 rounded-full flex items-center justify-center opacity-60">
                <Smile size={18} className="text-neutral-8" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Mock Home Indicator */}
        <div className="absolute bottom-1 w-1/3 h-1.5 bg-neutral-5 left-1/2 -translate-x-1/2 rounded-full" />
      </div>
    </div>
  </div>
);

// --- Main App Component ---

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('visual');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const tabs: { id: Tab; label: string; icon: any; group: string }[] = [
    { id: 'visual', label: '视觉基础标准', icon: Palette, group: 'FOUNDATION' },
    { id: 'icons', label: '图标资源库', icon: Smile, group: 'FOUNDATION' },
    { id: 'components', label: '系统核心组件', icon: Box, group: 'COMPONENTS' },
    { id: 'feedback', label: '交互反馈规范', icon: Layers, group: 'COMPONENTS' },
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
                <div className="w-1.5 h-6 bg-brand rounded-full shadow-[0_0_12px_rgba(52,123,255,0.4)]" />
                <h2 className="text-2xl font-bold tracking-tight text-neutral-11">色彩系统标准</h2>
              </div>
              <ColorSection />
            </section>
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-6 bg-brand rounded-full shadow-[0_0_12px_rgba(52,123,255,0.4)]" />
                <h2 className="text-2xl font-bold tracking-tight text-neutral-11">字体排版与层级规范</h2>
              </div>
              <TypographySection />
            </section>
          </div>
        );
      case 'icons':
        return (
          <div className="animate-fade-in">
             <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-6 bg-brand rounded-full shadow-[0_0_12px_rgba(52,123,255,0.4)]" />
                <h2 className="text-2xl font-bold tracking-tight text-neutral-11">图标资源库</h2>
              </div>
             <IconSection />
          </div>
        );
      case 'components': return <ComponentsSection />;
      case 'feedback': return <FeedbackSection />;
      case 'motion': return <MotionStage />;
      case 'prototype':
        return (
          <div className="space-y-16 animate-fade-in">
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-6 bg-brand rounded-full shadow-[0_0_12px_rgba(52,123,255,0.4)]" />
                <h2 className="text-2xl font-bold text-neutral-11">高保真交互示例</h2>
              </div>
              <PrototypeSection />
            </section>
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-6 bg-brand rounded-full shadow-[0_0_12px_rgba(52,123,255,0.4)]" />
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
      {/* Sidebar Navigation */}
      <motion.aside 
        initial={false}
        animate={{ width: sidebarOpen ? 280 : 0, x: sidebarOpen ? 0 : -280 }}
        className="h-full bg-white border-r border-[#ECECEF] flex flex-col flex-shrink-0 z-50 relative shadow-[10px_0_40px_rgba(0,0,0,0.02)]"
      >
        <div className="p-8 flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 bg-neutral-11 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-xl shadow-black/10">G</div>
          <div>
            <h1 className="font-bold text-neutral-11 tracking-tight text-[15px]">G-Design Pro</h1>
            <div className="flex items-center gap-1.5 mt-0.5">
               <div className="w-1.5 h-1.5 bg-success rounded-full" />
               <span className="text-[10px] font-bold text-neutral-6 tracking-widest uppercase">Version 1.5.0</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-8 overflow-y-auto scrollbar-hide">
          {['FOUNDATION', 'COMPONENTS', 'EXPERIENCE'].map(group => (
            <div key={group} className="space-y-1">
               <h3 className="px-4 text-[10px] font-black text-neutral-5 tracking-[0.2em] mb-2">{group}</h3>
               {tabs.filter(t => t.group === group).map((tab) => (
                 <button
                   key={tab.id}
                   onClick={() => setActiveTab(tab.id as Tab)}
                   className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 group ${
                     activeTab === tab.id 
                       ? 'bg-neutral-11 text-white shadow-xl shadow-black/10' 
                       : 'text-neutral-7 hover:bg-neutral-2 hover:text-neutral-11'
                   }`}
                 >
                   <tab.icon size={18} className={activeTab === tab.id ? 'text-white' : 'text-neutral-5 group-hover:text-brand transition-colors'} />
                   <span className="text-[14px] font-medium leading-none">{tab.label}</span>
                 </button>
               ))}
            </div>
          ))}
        </nav>

        <div className="p-6 border-t border-neutral-2">
           <div className="p-4 bg-brand/5 rounded-2xl border border-brand/10">
              <p className="text-[11px] text-neutral-7 leading-relaxed font-medium">如有任何需求或建议，请联系广联设计体验技术组。</p>
           </div>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full relative overflow-hidden bg-white">
        {/* Top Header */}
        <header className="h-[72px] premium-blur border-b border-[#F5F5F7] flex items-center justify-between px-8 z-40 shrink-0">
          <div className="flex items-center gap-6">
             <button 
               onClick={() => setSidebarOpen(!sidebarOpen)}
               className="p-2 -ml-2 text-neutral-7 hover:text-brand hover:bg-brand/5 rounded-lg transition-colors"
             >
                <Menu size={20} />
             </button>
             <div className="flex items-center gap-3 text-[13px] font-bold text-neutral-5">
                <span className="cursor-pointer hover:text-neutral-11 transition-colors tracking-tight">G-Design</span>
                <ChevronRight size={14} className="opacity-40" />
                <span className="text-neutral-11 tracking-tight">{currentTab?.label}</span>
             </div>
          </div>

          <div className="flex items-center gap-4">
             <div className="relative group hidden sm:block">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-5" />
                <input 
                  type="text" 
                  placeholder="搜索规范..." 
                  className="h-10 w-48 pl-10 pr-4 bg-neutral-2 border border-neutral-3 rounded-full text-xs font-bold outline-none focus:w-64 focus:border-brand transition-all placeholder:text-neutral-5"
                />
             </div>
             <div className="w-px h-6 bg-neutral-3" />
             <div className="w-9 h-9 rounded-full overflow-hidden border border-neutral-3 cursor-pointer hover:border-brand transition-colors">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100" className="w-full h-full object-cover" />
             </div>
          </div>
        </header>

        {/* Scroll Content Area */}
        <div className="flex-1 overflow-y-auto scroll-smooth animate-fade-in scrollbar-hide">
           <div className="px-10 py-12 max-w-[1400px] mx-auto min-h-full">
              <div className="mb-14">
                 <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-brand-light text-brand text-[10px] font-black uppercase rounded tracking-widest">{currentTab?.group}</span>
                    <span className="text-neutral-4 opacity-50">•</span>
                    <span className="text-neutral-5 text-[10px] font-black uppercase tracking-widest">Update: Apr 2026</span>
                 </div>
                 <h1 className="text-5xl font-black text-neutral-12 tracking-tighter mb-4 leading-none">{currentTab?.label}</h1>
                 <p className="text-neutral-7 text-[19px] max-w-2xl leading-relaxed font-medium">高效且一致的移动端设计标准。通过标准化语素与交互模式，旨在构建具有品牌辨识度的极致用户体验。</p>
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
        <div className="fixed bottom-8 right-8 flex flex-col gap-3">
           <button 
             onClick={() => document.querySelector('.overflow-y-auto')?.scrollTo({ top: 0, behavior: 'smooth' })}
             className="w-12 h-12 bg-white shadow-xl shadow-black/5 rounded-full border border-neutral-3 flex items-center justify-center text-neutral-8 hover:text-brand transition-colors hover:shadow-brand active:scale-90"
           >
              <ArrowUp size={20} />
           </button>
        </div>
      </div>
    </div>
  );
}

