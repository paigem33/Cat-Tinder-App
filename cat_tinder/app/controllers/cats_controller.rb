class CatsController < ApplicationController
# create index method to display all objects in database when visiting /cats
    def index
# ping database and 'retrieve' all objects
        @cats = Cat.all
# render the cats/objects to view
        render json: @cats
    end

    def create
  cat = Cat.create(cat_param)
  if cat.valid?
    render json: cat
   else
     render json: cat.errors, status: :unprocessable_entity
   end
end

    def destroy
    # ping database and 'retrieve' all objects
        @cats = Cat.all
        @cat = Cat.find(params[:id])
    # render the cats/objects to view
        @cat.delete
        render json: @cats
    end

# # create create method to add a new object (cat) to the database, calling on cat creationg param for fields
#     def create
# # create a new cat
#         @cat = Cat.create(cat_param)
# # render/respond that new cat
#         render json: @animal
#     end

    private

# create cat_params strong params to establish required fields for cat creation
    def cat_param
        params.require(:cat).permit(:name, :age, :enjoys)
    end



end
