export const mockResponses: Record<string, string> = {
  "merhaba": "Merhaba! Size nasıl yardımcı olabilirim?",
  "teşekkürler": "Rica ederim! Başka bir konuda yardımcı olabilir miyim?",
  "görüşürüz": "Görüşmek üzere! İyi günler dilerim.",
  "firma bilgisi": "Mock firma bilgileri: ABC Şirketi, Teknoloji sektöründe hizmet vermektedir.",
  "yardım": "Size şu konularda yardımcı olabilirim: firma bilgileri, kullanıcı bilgileri, genel sorular"
};

export const mockSessions = [
  {
    Id: 1,
    UserName: "test_kullanici",
    UserType: "Admin",
    FullName: "Test Kullanıcı",
    Email: "test@example.com",
    SelectedPfirmName: "ABC Teknoloji",
    SelectedPfirmId: 101,
    PfirmDfirmId: 1001,
    PfirmDfirmName: "ABC Ana Firma",
    Segment: "IT",
    SessionId: "mock_session_1",
    UserId: 1
  },
  {
    Id: 2,
    UserName: "demo_kullanici",
    UserType: "User",
    FullName: "Demo Kullanıcı",
    Email: "demo@example.com",
    SelectedPfirmName: "XYZ Yazılım",
    SelectedPfirmId: 102,
    PfirmDfirmId: 1002,
    PfirmDfirmName: "XYZ Ana Firma",
    Segment: "SW",
    SessionId: "mock_session_2",
    UserId: 2
  }
];