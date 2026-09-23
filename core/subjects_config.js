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
          name: '二維拋體運動 (1~72題)',
          dataPath: 'subjects/physics/01_拋體運動/data.js',
          count: 72
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
      description: '高中數學三角函數、空間向量與微積分（即將開放）',
      units: [
        {
          id: 'coming_soon_math',
          name: '即將推出（敬請期待）',
          dataPath: '',
          isPlaceholder: true
        }
      ]
    }
  ]
};
