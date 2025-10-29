import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const resources = [
    {
      title: "Презентации по математике",
      description: "Интерактивные презентации для 5-11 классов",
      category: "math",
      icon: "Presentation"
    },
    {
      title: "Задачи по информатике",
      description: "Практические задания по программированию",
      category: "informatics",
      icon: "Code2"
    },
    {
      title: "Тесты и самопроверка",
      description: "Материалы для закрепления знаний",
      category: "tests",
      icon: "ClipboardCheck"
    },
    {
      title: "Проекты учеников",
      description: "Лучшие работы моих учеников",
      category: "projects",
      icon: "Award"
    },
    {
      title: "Методические разработки",
      description: "Планы уроков и технологические карты",
      category: "methods",
      icon: "BookOpen"
    },
    {
      title: "Дидактические материалы",
      description: "Раздаточный материал для уроков",
      category: "materials",
      icon: "FileText"
    }
  ];

  const examLinks = [
    {
      title: "ФИПИ - Открытый банк заданий ОГЭ",
      description: "Официальные задания для подготовки к ОГЭ по математике и информатике",
      url: "https://fipi.ru/oge",
      type: "oge",
      icon: "ExternalLink"
    },
    {
      title: "ФИПИ - Открытый банк заданий ЕГЭ",
      description: "Официальные задания для подготовки к ЕГЭ",
      url: "https://fipi.ru/ege",
      type: "ege",
      icon: "ExternalLink"
    },
    {
      title: "Решу ОГЭ - Математика",
      description: "Образовательный портал для подготовки к экзаменам",
      url: "https://math-oge.sdamgia.ru/",
      type: "oge",
      icon: "Calculator"
    },
    {
      title: "Решу ЕГЭ - Математика",
      description: "Тысячи заданий с решениями",
      url: "https://math-ege.sdamgia.ru/",
      type: "ege",
      icon: "Calculator"
    },
    {
      title: "Решу ОГЭ - Информатика",
      description: "Подготовка к ОГЭ по информатике онлайн",
      url: "https://inf-oge.sdamgia.ru/",
      type: "oge",
      icon: "Monitor"
    },
    {
      title: "Решу ЕГЭ - Информатика",
      description: "Варианты ЕГЭ с автопроверкой",
      url: "https://inf-ege.sdamgia.ru/",
      type: "ege",
      icon: "Monitor"
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-yellow-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              МатИнфо Портал
            </h1>
            <div className="flex gap-2">
              <Button 
                variant={activeSection === "home" ? "default" : "ghost"}
                onClick={() => scrollToSection("home")}
                className="hover:scale-105 transition-transform"
              >
                <Icon name="Home" className="mr-2" size={18} />
                Главная
              </Button>
              <Button 
                variant={activeSection === "materials" ? "default" : "ghost"}
                onClick={() => scrollToSection("materials")}
                className="hover:scale-105 transition-transform"
              >
                <Icon name="FolderOpen" className="mr-2" size={18} />
                Копилка
              </Button>
              <Button 
                variant={activeSection === "exams" ? "default" : "ghost"}
                onClick={() => scrollToSection("exams")}
                className="hover:scale-105 transition-transform"
              >
                <Icon name="GraduationCap" className="mr-2" size={18} />
                ОГЭ/ЕГЭ
              </Button>
              <Button 
                variant={activeSection === "about" ? "default" : "ghost"}
                onClick={() => scrollToSection("about")}
                className="hover:scale-105 transition-transform"
              >
                <Icon name="User" className="mr-2" size={18} />
                О себе
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="inline-block mb-6">
              <div className="flex gap-4 text-6xl">
                <span className="animate-bounce" style={{ animationDelay: "0s" }}>📐</span>
                <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>💻</span>
                <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>📊</span>
              </div>
            </div>
            <h2 className="text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Добро пожаловать!
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Образовательный портал учителя математики и информатики. 
              Здесь вы найдете методические материалы, полезные ресурсы для подготовки к экзаменам 
              и много интересного о точных науках.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("materials")}
                className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform shadow-lg"
              >
                <Icon name="Sparkles" className="mr-2" size={20} />
                Исследовать материалы
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection("exams")}
                className="hover:scale-105 transition-transform shadow-lg"
              >
                <Icon name="Target" className="mr-2" size={20} />
                Подготовка к экзаменам
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="materials" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-heading font-bold mb-4 text-foreground">
              📚 Методическая копилка
            </h2>
            <p className="text-lg text-muted-foreground">
              Коллекция учебных материалов и методических разработок
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {resources.map((resource, index) => (
              <Card 
                key={index}
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={resource.icon} className="text-white" size={24} />
                  </div>
                  <CardTitle className="font-heading text-xl">{resource.title}</CardTitle>
                  <CardDescription className="text-base">{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Открыть
                    <Icon name="ChevronRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="exams" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-heading font-bold mb-4 text-foreground">
              🎯 Подготовка к ОГЭ и ЕГЭ
            </h2>
            <p className="text-lg text-muted-foreground">
              Лучшие ресурсы для успешной сдачи экзаменов
            </p>
          </div>

          <Tabs defaultValue="all" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="all" className="text-base">
                <Icon name="List" className="mr-2" size={18} />
                Все ресурсы
              </TabsTrigger>
              <TabsTrigger value="oge" className="text-base">
                <Icon name="School" className="mr-2" size={18} />
                ОГЭ
              </TabsTrigger>
              <TabsTrigger value="ege" className="text-base">
                <Icon name="GraduationCap" className="mr-2" size={18} />
                ЕГЭ
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {examLinks.map((link, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:border-accent cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => window.open(link.url, '_blank')}
                >
                  <CardHeader className="flex flex-row items-start justify-between space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                          <Icon name={link.icon} className="text-white" size={20} />
                        </div>
                        <CardTitle className="font-heading text-lg">{link.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">{link.description}</CardDescription>
                    </div>
                    <Icon name="ExternalLink" className="text-muted-foreground hover:text-accent transition-colors" size={20} />
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="oge" className="space-y-4">
              {examLinks.filter(link => link.type === "oge").map((link, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:border-accent cursor-pointer animate-scale-in"
                  onClick={() => window.open(link.url, '_blank')}
                >
                  <CardHeader className="flex flex-row items-start justify-between space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                          <Icon name={link.icon} className="text-white" size={20} />
                        </div>
                        <CardTitle className="font-heading text-lg">{link.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">{link.description}</CardDescription>
                    </div>
                    <Icon name="ExternalLink" className="text-muted-foreground hover:text-accent transition-colors" size={20} />
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="ege" className="space-y-4">
              {examLinks.filter(link => link.type === "ege").map((link, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:border-accent cursor-pointer animate-scale-in"
                  onClick={() => window.open(link.url, '_blank')}
                >
                  <CardHeader className="flex flex-row items-start justify-between space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                          <Icon name={link.icon} className="text-white" size={20} />
                        </div>
                        <CardTitle className="font-heading text-lg">{link.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base">{link.description}</CardDescription>
                    </div>
                    <Icon name="ExternalLink" className="text-muted-foreground hover:text-accent transition-colors" size={20} />
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-heading font-bold mb-4 text-foreground">
                👤 О себе
              </h2>
              <p className="text-lg text-muted-foreground">
                Немного о моем опыте и подходе к обучению
              </p>
            </div>

            <Card className="shadow-2xl animate-scale-in border-2">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center flex-shrink-0 overflow-hidden shadow-xl">
                    <img 
                      src="https://cdn.poehali.dev/projects/a99111f2-d2e0-4404-bc42-0fd25da09a9a/files/00993e72-c678-499a-8691-4008e07d04e4.jpg" 
                      alt="Фото учителя" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-6">
                    <div>
                      <h3 className="text-2xl font-heading font-bold mb-2 text-foreground">
                        Учитель математики и информатики
                      </h3>
                      <p className="text-muted-foreground text-lg">
                        Высшая квалификационная категория
                      </p>
                    </div>

                    <div className="space-y-4 text-foreground/90">
                      <p className="leading-relaxed">
                        Более 15 лет помогаю ученикам открывать для себя удивительный мир математики 
                        и информационных технологий. Верю, что каждый ученик способен достичь успеха 
                        при правильном подходе и мотивации.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4 py-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="Award" className="text-primary" size={18} />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Достижения</h4>
                            <p className="text-sm text-muted-foreground">Победители олимпиад и конкурсов</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="TrendingUp" className="text-secondary" size={18} />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Результаты ЕГЭ</h4>
                            <p className="text-sm text-muted-foreground">Средний балл выше регионального</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="Lightbulb" className="text-accent" size={18} />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Инновации</h4>
                            <p className="text-sm text-muted-foreground">Современные методы обучения</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon name="Heart" className="text-primary" size={18} />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">Подход</h4>
                            <p className="text-sm text-muted-foreground">Индивидуальный к каждому ученику</p>
                          </div>
                        </div>
                      </div>

                      <p className="leading-relaxed">
                        Мой опыт показывает, что успех в изучении точных наук приходит через понимание, 
                        а не зубрежку. Я использую современные образовательные технологии и создаю 
                        интерактивные материалы, которые делают обучение интересным и эффективным.
                      </p>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                        <Icon name="Mail" className="mr-2" size={18} />
                        Связаться
                      </Button>
                      <Button variant="outline" className="hover:bg-primary/5">
                        <Icon name="FileDown" className="mr-2" size={18} />
                        Скачать портфолио
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="font-heading font-bold text-xl mb-2">МатИнфо Портал</h3>
              <p className="text-white/80">Образовательный сайт учителя математики и информатики</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:text-white">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:text-white">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:text-white">
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </div>
          <div className="text-center mt-6 text-white/60 text-sm">
            © {new Date().getFullYear()} Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;