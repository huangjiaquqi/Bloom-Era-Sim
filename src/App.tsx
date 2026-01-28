


function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 1. 底层：背景层，饱和度很低的蓝色 */}
      <div 
        className="fixed inset-0 z-0"
        style={{ backgroundColor: '#e6f0f8' }}
      ></div>

      {/* 2. 界面层：显示基础UI元素 */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-8">
        {/* 左右矩形容器 */}
        <div className="flex items-center space-x-6 w-full max-w-7xl">
          {/* 左侧窄圆角矩形 */}
          <div 
            className="w-[150px] h-[60vh] rounded-3xl shadow-xl"
            style={{ backgroundColor: '#f0f4f8' }}
          ></div>
          
          {/* 右侧大圆角矩形 */}
          <div 
            className="flex-1 h-[60vh] rounded-3xl shadow-xl pt-12 pl-16"
            style={{ backgroundColor: '#ffffff9a' }}
          >
            {/* 标题部分 - 左上角 */}
            <div className="space-y-2">
              {/* 青春纪元模拟器 */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">青春纪元模拟器</h1>
              {/* Bloom Era Sim 标题 */}
              <h2 
                className="text-2xl md:text-3xl font-bold text-gray-900"
              >
                Bloom Era Sim
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* 3. 效果层：可以添加视觉效果，如粒子效果、光效等 */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        {/* 这里可以添加各种视觉效果，例如： */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/10 to-purple-400/10"></div> */}
        {/* 可以添加粒子效果、光晕效果等 */}
      </div>
    </div>
  )
}

export default App