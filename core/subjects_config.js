// ==========================================================================
// 學習中心科目與單元設定清單 (Learning Center Manifest)
// ==========================================================================

const LEARNING_CENTER_CONFIG = {
  defaultSubject: 'physics',
  defaultUnit: '02_linear_motion',
  subjects: [
    {
      id: 'physics',
      name: '物理科',
      icon: '⚛️',
      description: '高中物理直線運動、二維拋體運動精選題目',
      units: [
        {
          id: '02_linear_motion',
          name: '01 直線運動 (1~130題)',
          dataPath: 'subjects/physics/02_直線運動/data.js',
          dataVar: 'LINEAR_MOTION_QUESTIONS',
          masteryUrl: 'subjects/physics/02_直線運動/mastery.html',
          guideUrl: 'subjects/physics/02_直線運動/guide.html',
          tutorialUrl: 'subjects/physics/02_直線運動/tutorial.html',
          printUrl: 'subjects/physics/02_直線運動/guide_print.html',
          count: 130,
          categories: [
            { id: '1-13', name: '課堂精選例題 (1~13)', range: [1, 13] },
            { id: '14-43', name: '基礎運動學與圖形判讀 (14~43)', range: [14, 43] },
            { id: '44-96', name: '等加速度、落體與斜面 (44~96)', range: [44, 96] },
            { id: '97-109', name: '相對運動與追趕問題 (97~109)', range: [97, 109] },
            { id: '110-122', name: '歷屆學測物理試題 (110~122)', range: [110, 122] },
            { id: '123-130', name: '歷屆指考與分科測驗 (123~130)', range: [123, 130] }
          ]
        },
        {
          id: '01_projectile',
          name: '02 二維拋體運動 (1~72題)',
          dataPath: 'subjects/physics/01_拋體運動/data.js',
          dataVar: 'PHYSICS_QUESTIONS',
          masteryUrl: 'subjects/physics/01_拋體運動/mastery.html',
          guideUrl: 'guide.html',
          tutorialUrl: 'subjects/physics/01_拋體運動/tutorial.html',
          printUrl: 'guide_print.html',
          count: 72,
          categories: [
            { id: '1-27', name: '水平拋體運動 (1~27)', range: [1, 27] },
            { id: '28-60', name: '斜向拋體運動 (28~60)', range: [28, 60] },
            { id: '61-72', name: '斜面拋體與相對運動 (61~72)', range: [61, 72] }
          ]
        }
      ]
    },
    {
      id: 'chemistry',
      name: '化學科',
      icon: '🧪',
      description: '高中化學反應速率、化學平衡與酸鹼鹽（即將開放）',
      units: [
        {
          id: 'coming_soon_chem',
          name: '即將推出（敬請期待）',
          dataPath: '',
          isPlaceholder: true
        }
      ]
    },
    {
      id: 'math',
      name: '數學科',
      icon: '📐',
      description: '高中數學進階三角函數、空間向量與微積分',
      units: [
        {
          id: '09_advanced_trig',
          name: '09 進階三角函數 (1~65題)',
          dataPath: 'subjects/math/09_進階三角函數/data.js',
          dataVar: 'ADVANCED_TRIG_QUESTIONS',
          guideUrl: 'subjects/math/09_進階三角函數/guide.html',
          tutorialUrl: 'subjects/math/09_進階三角函數/tutorial.html',
          printUrl: 'subjects/math/09_進階三角函數/guide_print.html',
          count: 65,
          categories: [
            { id: 'diff-formulas', name: '§9-1 和差角公式 (1~4)', range: [1, 4] },
            { id: 'trig-graphs', name: '§9-2 三角函數圖形 (5~34)', range: [5, 34] },
            { id: 'harmonic-addition', name: '§9-3 正餘弦疊合 (35~65)', range: [35, 65] }
          ]
        },
        {
          id: 'trig_exam_sprint',
          name: '🔥 三角函數段考衝刺專區 (全真模考+題型突破)',
          dataPath: 'subjects/math/09_進階三角函數/data.js',
          dataVar: 'ADVANCED_TRIG_QUESTIONS',
          guideUrl: 'subjects/math/三角函數段考衝刺/index.html',
          tutorialUrl: 'subjects/math/三角函數段考衝刺/index.html',
          printUrl: 'subjects/math/09_進階三角函數/guide_print.html',
          count: 65,
          categories: [
            { id: 'diff-formulas', name: '§9-1 和差角公式 (1~4)', range: [1, 4] },
            { id: 'trig-graphs', name: '§9-2 三角函數圖形 (5~34)', range: [5, 34] },
            { id: 'harmonic-addition', name: '§9-3 正餘弦疊合 (35~65)', range: [35, 65] }
          ]
        }
      ]
    }
  ]
};
