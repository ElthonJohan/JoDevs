import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CHATBOT_RESPONSES } from '../../data/chatbot-data';

interface Message {
  type: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatbot-component.html',
  styleUrls: ['./chatbot-component.css']
})
export class ChatbotComponent {

  @ViewChild('chatBody') private chatBody!: ElementRef;

  isOpen = false;

  messages: Message[] = [
    {
      type: 'bot',
      text: '👋 Hola, soy JoDevs Assistant. ¿Cómo puedo ayudarte?'
    }
  ];

  constructor(){
    
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.scrollToBottom();
    }
  }

  ask(key: keyof typeof CHATBOT_RESPONSES) {
    const response = CHATBOT_RESPONSES[key];

    this.messages.push({
      type: 'user',
      text: response.title
    });

    this.messages.push({
      type: 'bot',
      text: response.message
    });

    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      try {
        if (this.chatBody) {
          this.chatBody.nativeElement.scrollTo({
            top: this.chatBody.nativeElement.scrollHeight,
            behavior: 'smooth'
          });
        }
      } catch (err) {
        // Fallback for browsers that don't support smooth scrolling behavior
        if (this.chatBody) {
          this.chatBody.nativeElement.scrollTop = this.chatBody.nativeElement.scrollHeight;
        }
      }
    }, 100);
  }
}