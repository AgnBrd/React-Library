import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';
import { LoginDto, LoginResponseDto } from './dto/login.dto';

export type ClientResponse<T> = {
  success: boolean;
  data: T;
  statusCode: number;
};

export class LibraryClient {
  private client: AxiosInstance;
  private token: string | null = null;

  constructor() {
    this.client = axios.create({ baseURL: 'http://localhost:8081' });
  }

  private setToken(token: string) {
    this.token = token;
    this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  public async login(
    data: LoginDto,
  ): Promise<ClientResponse<LoginResponseDto | null>> {
    try {
      const response: AxiosResponse<LoginResponseDto> = await this.client.post(
        'api/users/login',
        data,
      );

      if (response.data.token) {
        this.setToken(response.data.token);
      }

      return {
        success: true,
        data: response.data,
        statusCode: response.status,
      };
    } catch (error) {
      const axiosError = error as AxiosError<Error>;
      return {
        success: false,
        data: null,
        statusCode: axiosError.response?.status || 0,
      };
    }
  }

  public async getBooks(): Promise<ClientResponse<any | null>> {
    try {
      const response = await this.client.get('api/books');

      return {
        success: true,
        data: response.data,
        statusCode: response.status,
      };
    } catch (error) {
      const axiosError = error as AxiosError<Error>;

      return {
        success: false,
        data: null,
        statusCode: axiosError.response?.status || 0,
      };
    }
  }

  public async getAllLoans(): Promise<ClientResponse<any | null>> {
    try {
      const response = await this.client.get('api/loans');

      return {
        success: true,
        data: response.data,
        statusCode: response.status,
      };
    } catch (error) {
      const axiosError = error as AxiosError<Error>;

      return {
        success: false,
        data: null,
        statusCode: axiosError.response?.status || 0,
      };
    }
  }

  public async getUsers(): Promise<ClientResponse<any | null>> {
    try {
      const response = await this.client.get('api/users');

      return {
        success: true,
        data: response.data,
        statusCode: response.status,
      };
    } catch (error) {
      const axiosError = error as AxiosError<Error>;

      return {
        success: false,
        data: null,
        statusCode: axiosError.response?.status || 0,
      };
    }
  }

  public async addBook(
    data: {
      author: string;
      isbn: string;
      availableCopies: number;
      publisher: string;
      publicationYear: number;
      title: string;
    },
    role: string,
  ): Promise<ClientResponse<any>> {
    try {
      const response = await this.client.post('api/books', data); // Dodaj `data` jako drugi argument
      return {
        success: true,
        data: response.data,
        statusCode: response.status,
      };
    } catch (error) {
      const axiosError = error as AxiosError<Error>;
      return {
        success: false,
        data: null,
        statusCode: axiosError.response?.status || 0,
      };
    }
  }
  public async updateBook(
    id: string,
    data: {
      author: string;
      isbn: string;
      availableCopies: number;
      publisher: string;
      publicationYear: number;
      title: string;
    },
    role: string,
  ): Promise<ClientResponse<any>> {
    try {
      const response = await this.client.patch(`api/books/${id}`, data);
      return {
        success: true,
        data: response.data,
        statusCode: response.status,
      };
    } catch (error) {
      const axiosError = error as AxiosError<Error>;
      return {
        success: false,
        data: null,
        statusCode: axiosError.response?.status || 0,
      };
    }
  }
}
