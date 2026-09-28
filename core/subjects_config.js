// ==========================================================================
// 學習中心科目與單元設定清單 (Learning Center Manifest)
// ==========================================================================

const LEARNING_CENTER_CONFIG = {
  defaultSubject: 'physics',
  defaultUnit: '01_projectile',
  subjects: [
    {
      id: 'physics',
      name: '物理科',
      icon: '⚛️',
      description: '高中物理二維運動、拋體運動精選題目',
      units: [
        {
          id: '01_projectile',
          name: '01 二維拋體運動 (1~72題)',
          dataPath: 'subjects/physics/01_拋體運動/data.js',
          dataVar: 'PHYSICS_QUESTIONS',
          guideUrl: 'guide.html',
          printUrl: 'guide_print.html',
          count: 72,
          categories: [
            { id: '1-27', name: '水平拋體運動 (1~27)', range: [1, 27] },
            { id: '28-60', name: '斜向拋體運動 (28~60)', range: [28, 60] },
            { id: '61-72', name: '斜面拋體與相對運動 (61~72)', range: [61, 72] }
          ]
        },
        {
          id: '02_linear_motion',
          name: '02 直線運動 (1~19題)',
          dataPath: 'subjects/physics/02_直線運動/data.js',
          dataVar: 'LINEAR_MOTION_QUESTIONS',
          guideUrl: 'subjects/physics/02_直線運動/guide.html',
          printUrl: 'subjects/physics/02_直線運動/guide_print.html',
          count: 19,
          categories: [
            { id: '1-13', name: '課堂精選例題 (1~13)', range: [1, 13] },
            { id: '14-17', name: '重點補充習題 (14~17)', range: [14, 17] },
            { id: '18-19', name: '歷屆大考試題 (18~19)', range: [18, 19] }
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
