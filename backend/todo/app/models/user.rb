class User < ApplicationRecord
    has_many :lists

    validates :username, presence: true
   
end
